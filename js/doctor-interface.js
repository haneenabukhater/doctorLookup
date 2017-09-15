var apiKey = require('./../.env').apiKey;
import {Doctor} from './../js/doctorLookup.js';

$(document).ready(function(){

  let displayDoctors = function(doctors) {
    console.log(doctors);
    doctors.data.forEach(function(doctor){
      console.log(doctor.profile.first_name);
      $('ul#docList').append(`<li>${doctor.profile.first_name}`);
    });

  };

  $('#docSearch').submit(function(event){
    event.preventDefault();
    let issue = $('#symptom').val();

    let doctorIndex = new Doctor(issue);

    doctorIndex.getDoctors(issue,displayDoctors);
  });
});
