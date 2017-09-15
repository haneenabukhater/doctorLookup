var apiKey = require('./../.env').apiKey;
import {Doctor} from './../js/doctorLookup.js';

$(document).ready(function(){

  let displayDoctors = function(doctors) {
    if(doctors.length > 0){
      doctors.forEach(function(doctor){
        console.log("display dr phone: "+doctor.accept);
        let acceptance = 'No';
        if(doctor.accept === true){
          acceptance = 'Yes';
        }
        $('ul#docList').append(`<br> <li><strong>Doctor Name: </strong> ${doctor.first_name} ${doctor.last_name} <br> <strong>Address:</strong> ${doctor.address} <br> <strong>Phone Number:</strong> ${doctor.phone} <br> <strong>Accepting New Patients:</strong> ` + acceptance);
      });
    } else {
        $('ul#docList').append("Sorry! No doctors meet your criteria.");
    }
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
