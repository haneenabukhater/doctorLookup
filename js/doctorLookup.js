var apiKey = require('./../.env').apiKey;
export class Doctor{
  constuctor(symptom, doctorName){
    this.symptom = symptom;
    this.doctorName = doctorName;
  }
  filterDocData(resultDocs){
    let docArray = [];
    resultDocs.data.forEach(function(doctor){
      docArray.push({
        "first_name": doctor.profile.first_name,
        "last_name": doctor.profile.last_name,
        "address": doctor.practices[0].visit_address.street,
        "address2": doctor.practices[0].visit_address.street2,
        "city": doctor.practices[0].visit_address.city,
        "state": doctor.practices[0].visit_address.state,
        "zip": doctor.practices[0].visit_address.zip,
        "phone": doctor.practices[0].phones[0].number,
        "accept": doctor.practices[0].accepts_new_patients
      });
    });
    return docArray;
  }
  getDoctors(symptom, docName, displayDoctors){
    let results;
    let docResults;
    let url;
    console.log('name length ' +docName.length);
    console.log('symptom length ' +symptom.length);

    if ((docName.length > 0) && (symptom.length >0)) {
      url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${docName}&query=${symptom}&location=or-portland&user_location=45.773%2C-122.413&skip=0&limit=20&user_key=`+ apiKey;
    } else if ((docName.length === 0) && (symptom.length >0)){
      url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=or-portland&user_location=45.773%2C-122.413&skip=0&limit=20&user_key=`+ apiKey;
    } else if ((docName.length > 0) && (symptom.length === 0)){
      url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${docName}&location=or-portland&user_location=45.773%2C-122.413&skip=0&limit=20&user_key=`+ apiKey;
    } else{
      url = `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&user_location=45.773%2C-122.413&skip=0&limit=20&user_key=`+ apiKey;
    }
    console.log('this is the url: '+url);
    $.get(url)
      .then((results) =>{
        docResults = this.filterDocData(results);
        displayDoctors(docResults);
      })
      .fail(() =>{
        console.log('something went wrong in getDoctors fucntion');
      });
  }
}
