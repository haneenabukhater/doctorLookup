var apiKey = require('./../.env').apiKey;
import {Doctor} from './../js/doctorLookup.js';

$(document).ready(function(){

  let displayDoctors = function(doctors) {
    doctors.forEach(function(doctor){
      console.log("display dr phone: "+doctor.phone);
      $('ul#docList').append(`<li>Doctor Name: ${doctor.first_name} ${doctor.last_name}`);
    });

  };

  $('#docSearch').submit(function(event){
    event.preventDefault();
    $('#docList li').remove();
    let issue = $('#symptom').val();

    let doctorIndex = new Doctor(issue);

    doctorIndex.getDoctors(issue,displayDoctors);
    $('#response').show();
  });
});
