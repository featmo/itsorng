//const os = require("os")
//const ipc = require('electron').ipcRenderer // we need to talk

//var osSpec = os.release();
var divElements = document.querySelectorAll(".app-contain");
var iconDivElement = document.getElementById('move'); //this div moves the icon around... cool huh?
var imageElement = document.createElement('img');
imageElement.setAttribute('width','500')
imageElement.setAttribute('height','500')
//does what it says on the tin... kinda... This function gives the div elemts a tag number == i
function createDivs(){
  for(var i = 0; i < divElements.length;i++){
    divElements[i].id = 'info-'+i
  }
}

function getInfo(){
  //new date object
  //const d = new Date()
  /**
  using ternary to check if a number during a count is less than 10 implying less than two digits long
  if this is the case the elese clause of the operator appends a single 0 to the begining of the number
  **/
  function getTime(){
      divElements[0]
        .innerHTML = "23:04"
          /**  (d.getHours() > 9 ? d.getHours() : "0"+d.getHours())+":" //if hour is less than 9 append 0 to front i.e 9 becomes 09
          + (d.getMinutes() > 9 ? d.getMinutes() : "0"+d.getMinutes()) /**+":"
          + (d.getSeconds() > 9 ? d.getSeconds() : "0"+d.getSeconds())**/

  }

  //concatenates then appends as string to div
  function getDate(){
    divElements[1]
      .innerHTML = ".17.17.17";
            /**"."+(d.getDate() > 9 ? d.getDate() : '0'+d.getDate())+" ."
          + ((d.getMonth()+1) > 9 ? (d.getMonth()+1) : '0'+(d.getMonth()+1) )+" ."
          + d.getFullYear()
          setTimeout(getDate,360000)**/
    //divElements[3].innerHTML = Math.floor(os.freemem()/1000000000)+"/"+Math.floor((os.totalmem()/1000000000) -1)
  }
  //get the date and time duh
  getTime()
  getDate()

}
//does what it says on the tin
function getSystemInfo() {
  divElements[4].innerHTML = "windows"
}
//
function getWeatherIcon(id){
  /**
  see https://openweathermap.org/weather-conditions
  id is passed and concatenated to file path.. this is good for two reasons:
  1.because of the icon naming convention i don't need 9 if else clauses to
  append a damn image...
  2.reason 1 is all i got
  **/
    imageElement.setAttribute('src','https://github.com/moseseribo/itsorng/tree/master/assets/weather-icons/all/_10d.svg');
    imageElement.setAttribute('id','weather-icon');
    iconDivElement.appendChild(imageElement);
}
function getWeatherInfo() {
    //recieved object is added to html
    divElements[5].innerHTML = 'Dublin,IE'; //dublin
    divElements[6].innerHTML = 'Rain'; //rain
    divElements[7].innerHTML = 'light rain'; //light rain
    divElements[8].innerHTML = '17'; //17
    //divElements[9].innerHTML = arg[4]; //10d
    //passes icon code to new function
    getWeatherIcon('10d')
}

// create div elements
createDivs()
getSystemInfo()
getWeatherInfo();
getInfo()
