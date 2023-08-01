(function (angular) {
    'use strict';
    //// JavaScript Code ////
    function DefaultTree($log, $timeout, toaster, $http, $scope) {
        $scope.template = "upload_file_contents";
        $scope.treeData = "";
        $scope.root = [''];
        $scope.rootobj = "";
        $scope.res = "";
        $scope.telecharger_image = "";

        var vm = this;
        var newId = 1;
        vm.ignoreChanges = false;
        vm.newNode = {};

        vm.treeData = [];
        angular.copy(vm.originalData, vm.treeData);
        //alert();
        vm.treeConfig = {
            core: {
                multiple: false,
                animation: true,
                error: function (error) {
                    $log.error('treeCtrl: error from js tree - ' + angular.toJson(error));
                },
                'data': {
                    "url": "../../../app/defaultTree/" + conf,
                    "dataType": "json" // needed only if you do not supply JSON headers
                },
                check_callback: true,
                worker: true
            },
            onselect: function (n, t) {
                t.toggle_branch(n);
            },
            types: {
                default: {
                    icon: 'glyphicon glyphicon-folder-open'
                },
                file: {
                    icon: 'glyphicon glyphicon-file'
                },
                star: {
                    icon: 'glyphicon glyphicon-star'
                },
                cloud: {
                    icon: 'glyphicon glyphicon-cloud'
                }
            },
            'contextmenu': {
                'items':
                        function (node) {

                            var tmp = $.jstree.defaults.contextmenu.items();

                            
                            tmp.ccp = "";
                            tmp.remove._disabled = function (data) {
                                        var inst = $.jstree.reference(data.reference),
                                                obj = inst.get_node(data.reference);
                                        if (!(obj.parent.indexOf("#") >= 0)) {
                                            return false;
                                        }
                                        return true;
                                    },
                            tmp.remove.label = "Supprimer";
                            /* tmp.ccp.label = "Copier/Couper";
                             tmp.ccp.submenu.copy.label = "Copier";
                             tmp.ccp.submenu.copy._disabled = function (data) {
                             var inst = $.jstree.reference(data.reference),
                             obj = inst.get_node(data.reference);
                             if (!(obj.icon.indexOf("folder") >= 0)) {
                             return false;
                             }
                             return true;
                             }
                             tmp.ccp.submenu.cut.label = "Couper";
                             tmp.ccp.submenu.paste.label = "Coller";*/
                            tmp.rename = {
                                "separator_before": false,
                                "separator_after": false,
                                "_disabled": false, //(this.check("rename_node", data.reference, this.get_parent(data.reference), "")),
                                "label": "Renomer",
                                "action": function (data) {


                                    var inst = $.jstree.reference(data.reference),
                                            obj = inst.get_node(data.reference);
                                    inst.edit(obj);
                                }
                            };




                            delete tmp.create.action;
                            tmp.create.label = "Nouveau";

                            tmp.create.submenu = {
                                "create_folder": {
                                    "separator_after": true,
                                    "label": "Dossier",
                                    "_disabled": function (data) {
                                        var inst = $.jstree.reference(data.reference),
                                                obj = inst.get_node(data.reference);
                                        if (!(obj.parent.indexOf("file") >= 0)) {
                                            return false;
                                        }
                                        return true;
                                    },
                                    "action": function (data) {
                                        var inst = $.jstree.reference(data.reference),
                                                obj = inst.get_node(data.reference);

                                        inst.create_node(obj, {type: "Dossier"}, "last", function (new_node) {
//console.log(new_node);
                                            setTimeout(function () {

                                                // console.log(new_node);
                                                $.get('../../../app/create_default_node', {'id': new_node.id, 'text': new_node.text, 'icon': new_node.icon, 'parent': new_node.parents, type: 'Dossier',  'defaultTreeCebId':conf}).done(function (d) {
                                                   // console.log(d);
                                                    // new_node.original.original.cle =d; 
                                                    toaster.pop('Success', 'Message Success', 'le Dossier ' + new_node.text + ' Bien Ajouter');
                                                    // console.log(d);
                                                });
                                                inst.edit(new_node);
                                            }, 0);
                                        });
                                    }
                                },

                            };
                            if (this.get_type(node) === "file") {
                                delete tmp.create;
                            }
                            return tmp;
                        },
            },
            version: 1,
            plugins: ['types', 'contextmenu', "wholerow"]
        };
        vm.reCreateTree = function () {
            // alert();

            vm.ignoreChanges = true;
            angular.copy(this.originalData, this.treeData);
            vm.treeConfig.version++;
        };
        vm.simulateAsyncData = function () {
            //  alert("ss");
            vm.promise = $timeout(function () {
                vm.treeData.push({id: (newId++).toString(), parent: vm.treeData[0].id, text: 'Async Loaded'})
            }, 3000);
        };
        vm.addNewNode = function () {
            // alert();
            vm.treeData.push({id: (newId++).toString(), parent: vm.newNode.parent, text: vm.newNode.text});
        };
        this.setNodeType = function () {
            //  alert('ff')
            var item = _.findWhere(this.treeData, {id: this.selectedNode});
            item.type = this.newType;
            toaster.pop('success', 'Node Type Changed', 'Changed the type of node ' + this.selectedNode);
        };
        this.readyCB = function () {
            //alert("ddd");
            $timeout(function () {
                vm.ignoreChanges = false;
                toaster.pop('success', 'Application Bien Installer', 'Application prêt à fonctionner');

            });
        };








        this.createCB = function (e) {
            //alert(e);

            $scope.id_default = e;

            $timeout(function () {
                //toaster.pop('Success', 'Dossier Ajouter', item.node.text + 'Bien Ajouter');
            });
        };


        this.renameCB = function (e, item) {
            //console.log(item.node.original.original.cle);
            //alert();

            $.get('../../../app/update_default_node', {'id': item.node.id, 'text': item.node.text, 'icon': item.node.icon, 'parent': item.node.parents , 'defaultTreeCebId':conf }).done(function (d) {

            });


        };


        this.applyModelChanges = function () {
            // alert("test")
            return !vm.ignoreChanges;
        };




        this.deleteCB = function (e, item) {

//console.log (item); 
            $.get('../../../app/delete_default_folder', {'id': item.node.id, 'parent': item.node.parents, 'children_d':item.node.children_d , 'defaultTreeCebId':conf }).done(function (d) {


            });








        };


    }
//console.log($.jstree.defaults.contextmenu.state.events());

    angular.module('ngJsTreeDemo').controller('DefaultTree', DefaultTree);




})(angular);