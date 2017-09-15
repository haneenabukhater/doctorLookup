var apiKey = require('./../.env').apiKey;
import {Doctor} from './../js/doctorLookup.js';

$(document).ready(function(){

  let displayDoctors = function(doctors) {
    console.log("doctor length" + doctors.length);
    if(doctors.length > 0){
      doctors.forEach(function(doctor){

        let acceptance = 'No';
        if(doctor.accept === true){
          acceptance = 'Yes';
        }
        $('#output').append(`<div class = panel-panel> <br> <div class= 'panel-heading' <h3> ${doctor.first_name} ${doctor.last_name}</h3> </div> <br> <div class='panel-body'> <strong>Address:</strong> ${doctor.address} <br> ${doctor.city}, ${doctor.state} ${doctor.zip} <br> <strong>Phone Number:</strong> ${doctor.phone} <br> <strong>Accepting New Patients:</strong> ` + acceptance+ "</div>" + "</div>");
      });
    } else {
        $('#docList').append("<li> Sorry! No doctors meet your criteria.");
    }
  };

  $('#docSearch').submit(function(event){
    event.preventDefault();
    $('#docList').empty();
    $('#output').empty();

    let issue = $('#symptom').val();
    let docName = $('#docName').val();

    let doctorIndex = new Doctor(issue, docName);

    doctorIndex.getDoctors(issue, docName, displayDoctors);
    $('#response').show();
  });
});
