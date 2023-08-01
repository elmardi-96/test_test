//import * as Ladda from 'ladda';
(function (angular) {
    'use strict';
    //// JavaScript Code ////
    function treeCtrl($log, $timeout, toaster, $http, $scope) {

        //if (conf == null || conf === "") {

/********************************************* instantiation des variable *****************************/

            $scope.template = "upload_file_contents";
            $scope.treeData = "";
            $scope.root = [''];
            $scope.rootobj = "";
            $scope.r = "ss";
            $scope.res = "";
            $scope.telecharger_image = "";

            var vm = this;

            /*******************************fonction *******************************/

            function sendData(url, oper, $scope) {

                $http({
                    method: 'POST',
                    url: url,
                    data: $.param({
                        parent: oper
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                        .success(function (data, status, headers, config) {
                            console.log(data);
                            $scope.treeData = data;
                            $(".cg-busy").removeClass("ng-show").addClass("ng-hide");
                            //$scope.$apply();
                        })
                        .error(function (data, status, headers, config) {
                            // handle error things
                            //console.log(data);
                            console.log(data);

                        });
            }

            function getDataObj(url, oper, $scope) {
                //alert($('#projet_id').attr('projet-id'));
                $http({
                    method: 'POST',
                    url: url,
                    data: $.param({
                        operation: oper,
                        projet_id: $('#projet_id').attr('projet-id')
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                        .success(function (data, status, headers, config) {
                            $scope.rootobj = data;
                            //$scope.$apply();


                        })
                        .error(function (data, status, headers, config) {
                            // handle error things
                            //console.log(data);
                        });

            }


            function getDataObjOper(url, oper, $scope) {
                $http({
                    method: 'POST',
                    url: url,
                    data: $.param({
                        operation: oper,
                        projet_id: $('#projet_id').attr('projet-id')
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                        .success(function (data, status, headers, config) {
                            //console.log(data);
                            // $scope.rootOper = {id : data.id , text: data.text , parent: data.parent , icon : data.icon};
                            //$scope.$apply();
                        })
                        .error(function (data, status, headers, config) {
                            // handle error things
                            //console.log(data);
                        });

            }


            getDataObj('../module_archive_get_root_node_obj', 'get_root_node', $scope);
            getDataObjOper('../module_archive_get_root_node_obj_oper', 'get_root_node', $scope);
            //sendData('get_root_node_obj_oper', 'get_root_node', $scope);


            /*******************************configuration du tree ******************/

            vm.treeConfig = {
                core: {
                    multiple: false,
                    animation: true,
                    error: function (error) {
                        $log.error('treeCtrl: error from js tree - ' + angular.toJson(error));
                    },
                    'data': {
                        "url": "../module_archive_get_node?projet_id="+$("#projet_id").attr('projet-id'),
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

                                console.log(tmp);



                                tmp.remove.label = "Supprimer";
                                tmp.remove._disabled = function (data) {
                                    var inst = $.jstree.reference(data.reference),
                                            obj = inst.get_node(data.reference);
                                    console.log(obj);
                                    if (!(obj.id.indexOf("ajson1") >= 0)) {
                                        return false;
                                    }
                                    return true;
                                }
                                tmp.ccp.label = "Copier/Couper";

                                tmp.ccp.submenu.copy.label = "Copier";
                                tmp.ccp._disabled = function (data) {
                                    var inst = $.jstree.reference(data.reference),
                                            obj = inst.get_node(data.reference);
                                    if (!(obj.id.indexOf("ajson1") >= 0)) {
                                        return false;
                                    }
                                    return true;
                                }

                                tmp.ccp.submenu.cut.label = "Couper";
                                tmp.ccp.submenu.paste.label = "Coller";
                                tmp.rename = {
                                    "separator_before": false,
                                    "separator_after": false,

                                    "label": "Renomer",
                                    "_disabled": function (data) {
                                        var inst = $.jstree.reference(data.reference),
                                                obj = inst.get_node(data.reference);
                                        if (!(obj.id.indexOf("ajson1") >= 0)) {
                                            return false;
                                        }
                                        return true;
                                    },
                                    "action": function (data) {


                                        var inst = $.jstree.reference(data.reference),
                                        obj = inst.get_node(data.reference);
                                        inst.edit(obj);
                                    }
                                };



                                delete tmp.create.action;
                                tmp.create.label = "Nouveau";
                                tmp.create._disabled = function (data) {
                                    var inst = $.jstree.reference(data.reference),
                                            obj = inst.get_node(data.reference);
                                            console.log(obj.original.type);
                                   /*if (!(obj.id.indexOf("ajson1") >= 0)) {
                                        return false;
                                    }*/
                                    return false;
                                }

                                tmp.create.submenu = {
                                    "create_folder": {
                                        "separator_after": true,
                                        "label": "Dossier",
                                        "_disabled": function (data) {
                                            //alert();
                                            var inst = $.jstree.reference(data.reference),
                                                    obj = inst.get_node(data.reference);
                                                    console.log(obj);
                                                    if ((obj.original.type.indexOf("image") >= 0) || (obj.original.type.indexOf("excel") >= 0) || (obj.original.type.indexOf("word") >= 0) || (obj.original.type.indexOf("pdf") >= 0) || (obj.original.type.indexOf("txt") >= 0)) {
                                                        return true;
                                                    }
                                            return false;
                                        },
                                        "action": function (data) {
                                            var inst = $.jstree.reference(data.reference),
                                                    obj = inst.get_node(data.reference);

                                            inst.create_node(obj, {type: "Dossier"}, "last", function (new_node) {

                                                setTimeout(function () {

                                                    // console.log(new_node);
                                                    $.get('../module_archive_create_node', {'id': new_node.id, 'text': new_node.text, 'icon': new_node.icon, 'parent': new_node.parents,'projet_id':$("#projet_id").attr('projet-id'), type: 'Dossier'}).done(function (d) {
                                                        // alert();

                                                        //toaster.pop('Success', 'Message Success', 'le Dossier ' + new_node.text + ' ' + new_node.id + ' Bien Ajouter');
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

            this.readyCB = function () {
                //alert("ddd");
                $timeout(function () {
                    vm.ignoreChanges = false;
                    toaster.pop('success', 'Application Bien Installer', 'Application prêt à fonctionner');

                    sendData('../module_archive_get_root_node?projet_id='+$("#projet_id").attr('projet-id'), '', $scope);
                });
            };

            $scope.rootOper = {id: "ajson1", text: "root", parent: "#", icon: "glyphicon glyphicon-folder-open"};


            $.get('../module_archive_select_detail_by_id', {id: $scope.rootOper.id}).done(function (d) {

                //  console.log(d);
                var temp;
                temp = angular.fromJson(d);
                //console.log(temp);
                $scope.detinfo = temp;

            });



            /**************************************** operation **********************************************************/

            this.paste = function (e, item) {


                var inst = $.jstree.reference(item.node[0].id),
                        objSrc = inst.get_node(item.node[0].id);
                var inst = $.jstree.reference(item.parent),
                        objDes = inst.get_node(item.parent);



                var IDList = [];
                $($('.jstree').jstree(true).get_json(item.node[0].id, {
                    flat: true
                }))
                        .each(function (index, value) {
                            var node = $('.jstree').jstree().get_node(this.id);
                            IDList.push(node);
                            // console.log(node);
                        });

                $.get(item.mode, {aLLPaste: IDList, objSrcId: objSrc.id, objSrcText: objSrc.text, objSrcParent: objSrc.parent, objSrcParents: $scope.objSrc, objDesId: objDes.id, objDesText: objDes.text, objDesParent: objDes.parent, objDesParents: objDes.parents}).done(function (d) {


                    inst.refresh(objDes);
                    $timeout(function () {
                        sendData('../module_archive_get_root_node?projet_id='+$("#projet_id").attr('projet-id'), $scope.rootOper.id, $scope);
                        toaster.pop('success', 'Message Success', objSrc.text + 'Bien Coller');
                    }, 500);

                });



            }

            this.cut = function (e, item) {

                var inst = $.jstree.reference(item.node),
                        objSrc = inst.get_node(item.node);
                $scope.objSrc = objSrc.parents;

            }

            this.copy = function (e, item) {
                var inst = $.jstree.reference(item.node),
                        objSrc = inst.get_node(item.node);
                $scope.objSrc = objSrc.parents;
            }

            this.renameCB = function (e, item) {
                //console.log(item);
                $(".cg-busy").removeClass("ng-hide").addClass("ng-show");

                $.get('../module_archive_update_node', {'id': item.node.id, 'text': item.node.text, 'icon': item.node.icon, 'parent': item.node.parents, 'projet_id': $("#projet_id").attr('projet-id')}).done(function (d) {
                    if (d == 'no') {
                        $(".cg-busy").removeClass("ng-show").addClass("ng-hide");
                        toaster.pop('error', 'Message Error', item.node.text + ' déjà Exist Renomé-le Par une Autre ');
                        var inst = $.jstree.reference(item.node),
                                obj = inst.get_node(item.node);
                        inst.edit(obj);


                    } else {

                        toaster.pop('success', 'Message Success', item.node.text + ' Bien Modifier');
                        sendData('../module_archive_get_root_node?projet_id='+$("#projet_id").attr('projet-id'), item.node.parent, $scope);

                    }
                });


            };

            this.deleteCB = function (e, item) {

                if ($(".jstree").jstree().get_node(item.node.id).children.length == 0) {
                    var operation_delete;
                    if (item.node.icon.split('-')[1] == "folder") {
                        operation_delete = "folder";
                    } else if (item.node.icon.split('-')[1] == "file") {
                        operation_delete = "file";
                    } else if (item.node.icon.split('-')[1] == "image") {
                        operation_delete = "file";
                    } else if (item.node.icon.split('-')[1] == "compress") {
                        operation_delete = "compress";
                    } else {
                        operation_delete = "";
                    }

                    $(".cg-busy").removeClass("ng-hide").addClass("ng-show");
                    $.get('../module_archive_delete_node_' + operation_delete, {'id': item.node.id, 'parent': item.node.parents}).done(function (d) {


                        var id_send;

                        if (item.node.id == $scope.rootOper.id) {

                            id_send = $scope.rootOper.parent;

                            var inst = $.jstree.reference(id_send),
                                    obj = inst.get_node(id_send);


                            $http({
                                method: 'GET',
                                url: '../module_archive_get_root',
                                data: $.param({
                                    id: obj.id,
                                    parents: obj.parents,
                                    text: obj.text
                                }),
                                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                            })
                                    .success(function (data, status, headers, config) {
                                        console.log(data)

                                        $scope.root = data;
                                        $scope.$apply();
                                    })
                                    .error(function (data, status, headers, config) {
                                        // handle error things
                                        console.log(data);
                                    });


                        } else {
                            id_send = $scope.rootOper.id;
                        }

                        // console.log($scope);
                        $.get('../module_archive_select_detail_by_id_without_size', {'id': id_send}).done(function (d) {
                            var temp;
                            temp = angular.fromJson(d);
                            //console.log(temp);
                            $scope.detinfo = temp;
                            $scope.$apply();

                        });

                        toaster.pop('success', 'Message Success', 'Bien Excuter');
                        sendData('../module_archive_get_root_node?projet_id='+$("#projet_id").attr('projet-id'), item.node.parent, $scope);
                        $('.ope').removeClass('show');
                        $scope.url_image = "";

                    });

                } else {
                    var inst = $.jstree.reference(item.node),
                            obj = inst.get_node(item.node);
                    inst.refresh(obj);

                    toaster.pop('error', 'Message Error', 'Impossible de Supprimer Projet Contient des Ficher..');
                }
            };

            $scope.hide_doc = function (e) {

                var inst = $.jstree.reference(e),
                        obj = inst.get_node(e);
                 console.log(e);


                        $.ajax({

                            url: "module_archive_update_hide_doc",
                            type: 'POST',
                            data: {
                                id: e
                            },
                            success: function (result, textStatus, jqXHR)
                            {
                                //console.log(result);
                                toaster.pop('success', 'Message Success', 'Bien Excuter');

                                for (var i = $scope.treeData.length - 1; i >= 0; i--) {

                                    if ($scope.treeData[i].id == e) {
                                        $scope.treeData.splice(i, 1);
                                    }
                                }
                                // console.log($scope.rootOper);
                                $('.ope').removeClass('show');
                                $scope.url_image = "";
                                //$scope.detinfo = $scope.rootOper;
                                inst.refresh(obj);
                                $scope.$apply();

                                $.ajax({

                                    url: "../module_archive_select_node_id",
                                    type: 'POST',
                                    data: {
                                        id: obj.parent
                                    },
                                    success: function (data, textStatus, jqXHR)
                                    {
                                        var temp;
                                        temp = angular.fromJson(data[0]);
                                        $scope.detinfo = temp;
                                        $scope.$apply();

                                    }

                                })

                                $scope.$apply();
    
                            }
    
                        });

            }

            $scope.telecharger = function () {

//console.log('here');
//alert();
                $('#exampleModal').show();
                $('#exampleModal').addClass("in").show();
                //  $('#myModal').modal({show: true});
                // console.log($scope.rootOper.id);
                $scope.id = $scope.rootOper;
                // console.log($scope.rootOper);

                $scope.upload = function () {
                    //console.log($scope.rootOper);
                    var l = Ladda.create(document.querySelector('.my-buttonU'));
                    l.start();
                    $(".cg-busy").removeClass("ng-hide").addClass("ng-show");
                    console.log($scope.id.id);
                    
                    var inst = $.jstree.reference($scope.id),
                            obj = inst.get_node($scope.id);

                    var fd = new FormData();
                    var files = $('#file')[0].files[0];
                    
                    console.log(obj);
                    fd.append('file', files);
                    // AJAX request
                    console.log(fd);
                    if (files.size < 30097152) {
                        inst.create_node(obj, {type: 'file'}, "last", function (new_node) {



                            //var fd = new FormData();
                            //var files = document.getElementById('fileCharger').files[0];
                            //fd.append('file', files);
                            var fd = new FormData();
                            var files = $('#file')[0].files[0];
                            fd.append('file', files);
                            // AJAX request
                            console.log(fd);
                            if (files.size < 30097152) {

                                $.ajax({
                                    url: "../module_archive_save_post",
                                    data: {
                                        parent: $scope.id.id,
                                        id: new_node.id,
                                        parents: $scope.id.parents,
                                        text: $scope.id.text,
										projet: $("#projet_id").attr('projet-id')
                                    },
                                    type: "POST",
                                    error: function (err) {
                                        //  console.error(err);
                                    },
                                    success: function (data) {
                                        console.log(data);
                                        $.ajax({

                                            url: "../module_archive_save_file",
                                            type: 'POST',
                                            data: fd,
                                            contentType: false, // To unable request pages to be cached
                                            processData: false,
                                            success: function (result, textStatus, jqXHR)
                                            {

                                                console.log(result);

                                            }

                                        });
                                    },
                                    complete: function () {

                                        $.ajax({

                                            url: "../module_archive_importe_file",
                                            type: 'POST',
                                            data: fd,
                                            contentType: false, // The content type used when sending data to the server.
                                            processData: false,
                                            success: function (result, textStatus, jqXHR)
                                            {

                                                l.stop();
                                                console.log(result);
                                                //$scope.id = "";
                                                $('#exampleModal').hide();
                                                toaster.pop('success', 'Message Success', files.name + ' Bien Upload');
                                                inst.refresh(obj);
                                                $(".cg-busy").removeClass("ng-show").addClass("ng-hide");
                                                $timeout(function () {
                                                    sendData('../module_archive_get_root_node?projet_id='+$("#projet_id").attr('projet-id'), $scope.id.id, $scope);

                                                }, 500);
                                                //sendData('get_root_node', $scope.id.id, $scope);
                                                //addToData('select_detail_by_id', new_node.id, $scope.id.parents, $scope.id.text, $scope);


                                            }

                                        });

                                    }
                                });

                            } else {
                                inst.refresh(obj);
                                $('#exampleModal').modal('hide');
                                $(".cg-busy").removeClass("ng-show").addClass("ng-hide");
                                toaster.pop('error', 'Impossible de Télécharger ', files.name + ' il a une Taille plus que 30 MB ');
                            }














                        })


                    } else {
                        inst.refresh(obj);
                        $('#myModal').modal('hide');
                        $(".cg-busy").removeClass("ng-show").addClass("ng-hide");
                        toaster.pop('error', 'Impossible de Télécharger ', files.name + ' il a une Taille plus que 2 MB ');
                    }











                };
            }

            $scope.operation = function (e) {
                //$scope.detinfo = null;

                //console.log(e.dta);
                var inst = $.jstree.reference(e.dta),
                        objs = inst.get_node(e.dta);

                $scope.detinfo = e.dta;

                // console.log(objs.id);
                $.get('../module_archive_select_detail_by_id', {id: objs.id, parents: objs.parents, text: objs.text}).done(function (d) {

                    console.log(d);
                    var temp;
                    temp = angular.fromJson(d);
                    //console.log(temp);
                    $scope.size = temp.size;

                });





                var inst = $.jstree.reference(e.dta),
                        obj = inst.get_node(e.dta);





                $(".table tr").removeClass("color_background_select");
                $(".class_" + e.dta.id).toggleClass('color_background_select');













                //alert(obj.text);
                if (!(obj.icon.indexOf("folder") >= 0)) {
                    $('.ope').addClass('show');
                    $.ajax({

                        url: "../module_archive_get_url_image",
                        type: 'POST',
                        data: {
                            parents: obj.parents,
                            text: obj.text
                        },
                        success: function (result, textStatus, jqXHR)
                        {
                            //console.log(result);
                            $scope.telecharger_image = result;
                            $scope.$apply();

                        }

                    });
                } else {
                    $('.ope').removeClass('show');
                    $scope.telecharger_image = "";
                }
                $scope.operationData = obj;

                if ((obj.icon.indexOf("folder") >= 0)) {
                    $scope.url_image = "";
                } else if ((obj.icon.indexOf("excel") >= 0)) {

                        $scope.url_image = "/images/icon/xls.png";

                    } else if ((obj.icon.indexOf("pdf") >= 0)) {

                        $scope.url_image = "/images/icon/pdf.png";

                    } else if ((obj.icon.indexOf("word") >= 0)) {

                        $scope.url_image = "/images/icon/word.png";

                    }else if ((obj.icon.indexOf("text") >= 0)) {

                        $scope.url_image = "/images/icon/txt.png";

                    } 
                    
                    else if ((obj.icon.indexOf("file") >= 0)) {

                        $scope.url_image = "/images/icon/blank.png";

                    } 
                    
                    
                    else if ((obj.text.indexOf(".zip") >= 0)) {
                        $scope.url_image = "/images/icon/zip.png";
                    } else {
                    $("#avatar").hide();
                    $(".load_show_det").show();
                    //console.log("2 eme get_url_image")
                    $.ajax({

                        url: "../module_archive_get_url_image",
                        type: 'POST',
                        data: {
                            parents: obj.parents,
                            text: obj.text
                        },
                        success: function (result, textStatus, jqXHR)
                        {
                            //console.log(result);
                            $("#avatar").show();
                            $(".load_show_det").hide();
                            $scope.url_image = result;
                            $scope.$apply();

                        }

                    });
                   /* $http({
                        method: 'POST',
                        url: 'get_url_image',
                        data: $.param({
                            parents: obj.parents,
                            text: obj.text}),
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                            .success(function (data, status, headers, config) {
                                console.log(data);
                                $("#avatar").show();
                                $(".load_show_det").hide();
                                
                                $scope.url_image = data;


                            })
                            .error(function (data, status, headers, config) {
                                // handle error things
                                console.log("error 2 eme get_url_image")
                                console.log(data);
                            });*/
                }

                //console.log($scope.operationData);
                $scope.deleteOp = function () {

                    $(".cg-busy").removeClass("ng-hide").addClass("ng-show");
                    //alert();
                    var operation_delete;
                    //alert($scope.operationData.text);
                    //console.log($scope.operationData);
                    if ($scope.operationData.icon.split('-')[1] == "folder") {
                        operation_delete = "folder";
                    } else if ($scope.operationData.icon.split('-')[1] == "file") {
                        operation_delete = "file";
                    } else if ($scope.operationData.icon.split('-')[1] == "image") {
                        operation_delete = "file";
                    } else if ($scope.operationData.icon.split('-')[1] == "compress") {
                        operation_delete = "compress";
                    } else {
                        operation_delete = "";
                    }
                    $.get('../module_archive_delete_node_' + operation_delete, {'id': $scope.operationData.id, 'parent': $scope.operationData.parents}).done(function (d) {
                        $http({
                            method: 'POST',
                            url: "../module_archive_select_detail_by_id",
                            data: $.param({
                                id: $scope.rootOper.id
                            }),
                            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                        })
                                .success(function (data, status, headers, config) {
                                    //console.log(data);
                                    $scope.url_image = "";
                                    $scope.detinfo = data[0];

                                    //$(".cg-busy").removeClass("ng-show").addClass("ng-hide");
                                })
                                .error(function (data, status, headers, config) {
                                    // handle error things
                                    //console.log(data);
                                    // console.log(data);

                                });
                        toaster.pop('success', 'Message Success', 'Bien Excuter');
                        inst.refresh(obj);
                        sendData('../module_archive_get_root_node?projet_id='+$("#projet_id").attr('projet-id'), $scope.operationData.parent, $scope);
                    });

                };

                $scope.downloadOp = function () {

                    $(".cg-busy").removeClass("ng-hide").addClass("ng-show");
                    $.get('../module_archive_compress_node', {'id': $scope.operationData.id + '_compress', 'text': $scope.operationData.text, 'icon': 'glyphicon glyphicon-compressed', 'parent': $scope.operationData.parents, type: 'Dossier','projet_id': $("#projet_id").attr('projet-id')}).done(function (d) {
                        // alert();
                        if (d.indexOf("no") >= 0) {


                            toaster.pop('error', 'Message Error', 'votre projet doit contenir des fichier , ne peux pas télécharger dossier vide');
                            $(".cg-busy").removeClass("ng-show").addClass("ng-hide");


                        } else {

                            $(".cg-busy").removeClass("ng-show").addClass("ng-hide");
                            toaster.pop('success', 'Message Success', 'votre téléchargement débuter');
                            //console.log(d);
                            window.location.href = "../../" + d;

                        }

                        $.get('../module_archive_compress_node_delete_after_load', {'id': $scope.operationData.id + '_compress', 'text': $scope.operationData.text, 'icon': 'glyphicon glyphicon-compressed', 'parent': $scope.operationData.parents, type: 'Dossier','projet_id': $("#projet_id").attr('projet-id')}).done(function (d) {
                            // alert();
                            console.log(d);
                        });

                        // sendData('get_root_node', $scope.operationData.parent, $scope);

                    });
                }





            }

            $scope.dbclick = function (e) {

                $('.load').hide();
                $('.load_show').show();
                $('.loading').show();

                var inst = $.jstree.reference(e.dta.id),
                        obj = inst.get_node(e.dta.id);

                $scope.rootOper = obj;
                if ((obj.icon.indexOf("folder") >= 0)) {

                    $.get('../module_archive_get_root', {id: obj.id, parents: obj.parents, text: obj.text}).done(function (d) {
                        $scope.root = angular.fromJson(d);
                        $scope.$apply();

                    });

                    $.get('../module_archive_get_node_id', {operation: 'get_node_id', id: e.dta.id, parents: e.dta.parents}).done(function (d) {


                        $scope.treeData = angular.fromJson(d);
                        $scope.$apply();
                        $('.load').show();
                        $('.load_show').hide();
                        $('.loading').hide();

                    });


                }






            };

            this.clickCB = function (e, item) {


                var node = $(e.target).parent().closest("li");
                var nodeLi = $(e.target);
                //console.log(nodeLi[0]);
                if (nodeLi[0].tagName != "I") {

                    var item = node[0].id;
                    //console.log(item);
                    var inst = $.jstree.reference(node[0].id),
                            obj = inst.get_node(node[0].id);
                    $.get('../module_archive_select_detail_by_id_without_size', {'id': obj.id}).done(function (d) {

                        //console.log(d);
                        var temp;
                        temp = angular.fromJson(d);
                        //console.log(temp);
                        $scope.detinfo = temp;

                    });
                    //console.log(node[0].type);

                    console.log(obj.icon);
                    if (!(obj.icon.indexOf("folder") >= 0)) {
                        $('.ope').addClass('show');
                        $http({
                            method: 'POST',
                            url: '../module_archive_get_url_image',
                            data: $.param({
                                parents: obj.parents,
                                text: obj.text}),
                            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                        })
                                .success(function (data, status, headers, config) {

                                    $scope.telecharger_image = data;

                                })
                                .error(function (data, status, headers, config) {
                                    // handle error things
                                    console.log(data);
                                });
                    } else {
                        $('.ope').removeClass('show');
                        $scope.telecharger_image = "";
                    }







                    $scope.rootOper = obj;

                    //$("#sidebar ul li").css("background-color", "#F8F8F8")
                    //$("#" + obj.id).css("background-color", "white");



                    if ((obj.icon.indexOf("folder") >= 0)) {
                        $scope.url_image = "";
                        $('.load').hide();
                        $('.load_show').show();
                        $('.loading').show();



                        $.get('../module_archive_get_root', {id: obj.id, parents: obj.parents, text: obj.text}).done(function (d) {
                            console.log(d);
                            $scope.root = angular.fromJson(d);
                            $scope.$apply();

                        });

                        $.get('../module_archive_get_node_id', {operation: 'get_node_id', id: item}).done(function (d) {


                            $scope.treeData = angular.fromJson(d);
                            $scope.$apply();
                            $('.load').show();
                            $('.load_show').hide();
                            $('.loading').hide();

                        });























//                        $http({
//                            method: 'GET',
//                            url: 'get_node_id',
//                            data: $.param({
//                                operation: 'get_node_id',
//                                id: item
//                            }),
//                            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
//                        })
//                                .success(function (data, status, headers, config) {
//                                    // console.log(data)
//                                    $('.load').show();
//                                    $('.load_show').hide();
//                                    $('.loading').hide();
//                                    $scope.treeData = data;
//                                })
//                                .error(function (data, status, headers, config) {
//                                    // handle error things
//                                    console.log(data);
//                                });



                    } else if ((obj.icon.indexOf("excel") >= 0)) {

                        $scope.url_image = "/images/icon/xls.png";

                    } else if ((obj.icon.indexOf("pdf") >= 0)) {

                        $scope.url_image = "/images/icon/pdf.png";

                    } else if ((obj.icon.indexOf("word") >= 0)) {

                        $scope.url_image = "/images/icon/word.png";

                    }else if ((obj.icon.indexOf("text") >= 0)) {

                        $scope.url_image = "/images/icon/txt.png";

                    } 
                    
                    else if ((obj.icon.indexOf("file") >= 0)) {

                        $scope.url_image = "/images/icon/blank.png";

                    } 
                    
                    
                    else if ((obj.text.indexOf(".zip") >= 0)) {
                        $scope.url_image = "/images/icon/zip.png";
                    } else {
                        $("#avatar").hide();
                        $(".load_show_det").show();
                        var item = node[0].id;
                        var inst = $.jstree.reference(node),
                                obj = inst.get_node(node);

                        // console.log(obj);

                        //console.log();

                        $http({
                            method: 'POST',
                            url: '../module_archive_get_url_image',
                            data: $.param({
                                parents: obj.parents,
                                text: obj.text}),
                            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                        })
                                .success(function (data, status, headers, config) {

                                    $(".load_show_det").hide();
                                    $("#avatar").show();
                                    $scope.url_image = data;

                                })
                                .error(function (data, status, headers, config) {
                                    // handle error things
                                    console.log(data);
                                });














                    }

                }

            };



    }
//console.log($.jstree.defaults.contextmenu.state.events());

    angular.module('ngJsTreeDemo').controller('treeCtrl', treeCtrl);




})(angular);