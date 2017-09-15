var apiKey = require('./../.env').apiKey;
import {Doctor} from './../js/doctorLookup.js';

$(document).ready(function(){

  let displayDoctors = function(doctors) {
    if(doctors.length > 0){
      doctors.forEach(function(doctor){

        let acceptance = 'No';
        if(doctor.accept === true){
          acceptance = 'Yes';
        }

        $('ul#docList').append(`<br> <li><strong>Doctor Name: </strong> ${doctor.first_name} ${doctor.last_name} <br> <strong>Address:</strong> ${doctor.address} <br> ${doctor.city}, ${doctor.state} ${doctor.zip} <br> <strong>Phone Number:</strong> ${doctor.phone} <br> <strong>Accepting New Patients:</strong> ` + acceptance);
      });
    } else {
        $('ul#docList').append("<li> Sorry! No doctors meet your criteria.");
    }
  };

  $('#docSearch').submit(function(event){
    event.preventDefault();
    $('#docList li').remove();
    $('#docList br').remove();

    let issue = $('#symptom').val();
    let docName = $('#docName').val();

    let doctorIndex = new Doctor(issue, docName);

    doctorIndex.getDoctors(issue, docName, displayDoctors);
    $('#response').show();
  });
});
