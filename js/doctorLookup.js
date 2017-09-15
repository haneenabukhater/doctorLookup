var apiKey = require('./../.env').apiKey;
export class Doctor{
  constuctor(symptom){
    this.symptom = symptom;
    // this.doctorName = doctorName;
  }
  getDoctors(symptom, displayDoctors){
    let results;
    console.log('your symptom is: ' + symptom);
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=or-portland&user_location=45.773%2C-122.413&skip=0&limit=10&user_key=`+ apiKey;
    $.get(url)
      .then((results) =>{
        displayDoctors(results);
      })
      .fail(() =>{
        console.log('something went wrong in getDoctors fucntion');
      });
  }
}
