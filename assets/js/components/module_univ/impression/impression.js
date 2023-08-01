const routes = require('../../../../../public/js/fos_js_routes.json');
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';


//js/plugins/slimscroll/jquery.slimscroll.min.js
Routing.setRoutingData(routes);
import { ShowFormErrors } from '../../../ManagementErrors/index.js';
import * as CustomSearchDatatable from '../../../ManagementSearchDatatable/customSearch.js';
import * as Ladda from 'ladda';

global.$ = $;

$('.new , .edit').on('submit', 'form', function (e) {
    var l = Ladda.create(document.activeElement);
    l.start();
});

const Swal = require('sweetalert2')
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-white btn-xs sySweetStyle',
        cancelButton: 'btn btn-warning btn-xs sySweetStyle'
    },
    buttonsStyling: false
})

$('.full-height-scroll').slimscroll({
    height: '800px'
})




var select2_dossiers = $(".select2_dossiers").select2({
    placeholder: "Choix Matiére",
    allowClear: true
}); 




$('body').on('click','.etat',function (e) {
  //  alert($('.etablissement').val()+' ' +$('.formation').val()+' '+$('.annee').val()+' '+$('.promotion').val()+' '+$('.semestre').val());
   if($('.etablissement').val()=='' ||$('.formation').val()=='' || $('.annee').val()=='' || $('.promotion').val()=='' || $('.semestre').val()==''){
    
    toastr.warning('Veuillez Renseigner une Etablissement , Formation , Promotion Année et une Semestre  Pour continuer cette opération ', 'warning', {timeOut: 4000});

   }else{
    
    var url = Routing.generate('module_univ_impression_etatControle', {'etab': $('.etablissement').val() ,'form':$('.formation').val() , 'ann':$('.annee').val() , 'prom':$('.promotion').val() , 'sem':$('.semestre').val()});
    window.open(url, '_blank');
 //   window.location.href = url;
   }
   
    

    e.preventDefault();
});

$('body').on('click','.etat_mass',function (e) {
    //  alert($('.etablissement').val()+' ' +$('.formation').val()+' '+$('.annee').val()+' '+$('.promotion').val()+' '+$('.semestre').val());
     if($('.etablissement').val()=='' ||$('.formation').val()=='' || $('.annee').val()=='' || $('.promotion').val()=='' || $('.semestre').val()==''){
      
      toastr.warning('Veuillez Renseigner une Etablissement , Formation , Promotion Année et une Semestre  Pour continuer cette opération ', 'warning', {timeOut: 4000});
  
     }else{
     // alert($('.semaine option:selected').text());
      var url = Routing.generate('module_univ_impression_etatMass', {'etab': $('.etablissement').val() ,'form':$('.formation').val() , 'ann':$('.annee').val() , 'prom':$('.promotion').val() , 'sem':$('.semestre').val()});
      window.location.href = url;
     }
     
      
  
      e.preventDefault();
  });

  $('body').on('click','.etat_absence',function (e) {
    //  alert($('.etablissement').val()+' ' +$('.formation').val()+' '+$('.annee').val()+' '+$('.promotion').val()+' '+$('.semestre').val());
     if($('.etablissement').val()=='' ||$('.formation').val()=='' || $('.annee').val()=='' || $('.promotion').val()=='' || $('.semestre').val()==''){
      
      toastr.warning('Veuillez Renseigner une Etablissement , Formation , Promotion Année et une Semestre  Pour continuer cette opération ', 'warning', {timeOut: 4000});
  
     }else{
     // alert($('.semaine option:selected').text());
      var url = Routing.generate('module_univ_impression_absence', {'etab': $('.etablissement').val() ,'form':$('.formation').val() , 'ann':$('.annee').val() , 'prom':$('.promotion').val() , 'sem':$('.semestre').val() ,'semaine':$('.semaine').val(), 'des': $('.semaine option:selected').text()});
      window.location.href = url;
     }
     
      
  
      e.preventDefault();
  });

$('select.select2').select2();
$('body').on('change','.etablissement',function (e) {
    if ($.isNumeric($(this).val())) {

        $.ajax({
            url: Routing.generate('get_formation_impression', {id: $(this).val()}),
            success: function (result) {
                var infos = jQuery.parseJSON(result);
               
                $(".formation").html(infos.data);
                $('select.select2').select2();
            }
        });
    } else {
        $('.formation').html('<option value="">Choix Formation</option>');
        $('.annee').html('<option value="">Choix Année</option>');
        $('.promotion').html('<option value="">Choix Promotion</option>');
        $('.semestre').html('<option value="">Choix Semestre</option>');
    }
    e.preventDefault();
});


$('body').on('change','.formation',function (e) {
    if ($.isNumeric($(this).val())) {

        $.ajax({
            url: Routing.generate('get_annee_impression', {id: $(this).val()}),
            success: function (result) {
                var infos2 = jQuery.parseJSON(result);
               
                $(".annee").html(infos2.data);
                $('select.select2').select2();
            }
        });

        $.ajax({
            url: Routing.generate('get_promotion_impression', {id: $(this).val()}),
            success: function (result) {
                var infos2 = jQuery.parseJSON(result);
               
                $(".promotion").html(infos2.data);
                $('select.select2').select2();
            }
        });


        
    } else {
        $('.annee').html('<option value="">Choix Année</option>');
        $('.promotion').html('<option value="">Choix Promotion</option>');
        $('.semestre').html('<option value="">Choix Semestre</option>');
        
    }
    e.preventDefault();
});
$('body').on('change','.promotion',function (e) {
    if ($.isNumeric($(this).val())) {

        $.ajax({
            url: Routing.generate('get_semestre_impression', {id: $(this).val()}),
            success: function (result) {
                var infos2 = jQuery.parseJSON(result);
               
                $(".semestre").html(infos2.data);
                $('select.select2').select2();
            }
        });

        
    } else {
        $('.semestre').html('<option value="">Choix Semestre</option>');
        
    }
    e.preventDefault();
});

//ajouter par mourad 

// la fonction avec paramètre année et le retour essemble des semaine de ce année 
var moment = require('moment');
function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(+d);
    d.setHours(0,0,0);
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setDate(d.getDate() + 4 - (d.getDay()||7));
    // Get first day of year
    var yearStart = new Date(d.getFullYear(),0,1);
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7)
    // Return array of year and week number
    return [d.getFullYear(), weekNo];
}


function weeksInYear(year) {
    var month = 11, day = 31, week,d= null;
    do {
      d = new Date(year, month, day--);
      week = getWeekNumber(d)[1];
    } while (week == 1);
  
    return week;
  }

  // essemble des abriviation des mois d'année
  var tabmonth = new Array("janv","févr","mars","avr","mai","juin","juil","août","sept","oct","nov","déc") ;

  //boucle pour afficher les semaine 




for (var i = 1; i <= weeksInYear(new Date().getFullYear()); i++) {

  var test1 = moment().day("d").week(i);

  var oneMonthFromJan312009 = new Date(moment().day("d").week(i));

  oneMonthFromJan312009.setDate(oneMonthFromJan312009.getDate()+6);
  
  if(parseInt(oneMonthFromJan312009.getMonth()) + 1 == parseInt(test1.format("M"))){
      $(".sem_dupl").append("<option value=" + i +"> Semaine "+i+" : " + test1.format("D") + " - "+ oneMonthFromJan312009.getDate() + " " + tabmonth[oneMonthFromJan312009.getMonth()] + " . "+oneMonthFromJan312009.getFullYear() + '</option>')
  }else{
      $(".sem_dupl").append("<option value=" + i +"> Semaine "+i+" : " + test1.format("D") + " " + tabmonth[test1.format("M") - 1] + " - "+ oneMonthFromJan312009.getDate() + " " + tabmonth[oneMonthFromJan312009.getMonth()] + " . "+oneMonthFromJan312009.getFullYear()+ '</option>')
     // alert(test1.format("D") + tabmonth[test1.format("M")] + " - "+ oneMonthFromJan312009.format("D") + tabmonth[oneMonthFromJan312009.format("M")] + "."+test1.format("Y"))
  }
  }
