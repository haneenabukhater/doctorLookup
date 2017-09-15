var apiKey = require('./../.env').apiKey;
export class Doctor{
  constuctor(symptom){
    this.symptom = symptom;
    // this.doctorName = doctorName;
  }
  filterDocData(resultDocs){
    let docArray = [];
    resultDocs.data.forEach(function(doctor){
      docArray.push({
        "first_name": doctor.profile.first_name,
        "last_name": doctor.profile.last_name,
        "address": doctor.practices[0].visit_address.street,
        "phone": doctor.practices[0].phones[0].number
      });
    });
    return docArray;
  }
  getDoctors(symptom, displayDoctors){
    let results;
    let docResults;
    console.log('your symptom is: ' + symptom);
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=or-portland&user_location=45.773%2C-122.413&skip=0&limit=10&user_key=`+ apiKey;
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




// getDoctors(symptom, displayDoctors){
//   let results;
//   console.log('your symptom is: ' + symptom);
//   let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=or-portland&user_location=45.773%2C-122.413&skip=0&limit=10&user_key=`+ apiKey;
//   $.get(url)
//     .then((results) =>{
//       displayDoctors(results);
//     })
//     .fail(() =>{
//       console.log('something went wrong in getDoctors fucntion');
//     });
// }
