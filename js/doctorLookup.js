var apiKey = require('./../.env').apiKey;
export class Doctor{
  constuctor(symptom, doctorName){
    this.symptom = symptom;
    this.doctorName = doctorName;
  }
  getDoctors(displayDoctors){
    let results;
    let url = 'https://api.betterdoctor.com/2016-03-01/doctors?query=headache&location=or-portland&user_location=45.773%2C-122.413&skip=0&limit=10&user_key=' + apiKey;
    $.get(url)
      .then((results) =>{
        displayDoctors(results);
      })
      .fail(() =>{
        console.log('something went wrong in getDoctors fucntion');
      });
  }
}
