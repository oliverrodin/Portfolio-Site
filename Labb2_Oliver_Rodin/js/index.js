//Sparar url i vaiabel
const urlEducation = "data.json";

//Hämtar Utbildningsinformation från .json.
fetch(urlEducation)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    for (let i = 0; i < data.education.length; i++)
        document.getElementById("education").innerHTML +=
        `<li>
          <h5>${data.education[i].year}</h5>
          <h4>${data.education[i].direction}</h4>
          <h5>${data.education[i].school}</h5>
         </li>`;
});


//Hämtar arbetslivserfarenheter från .json.
fetch(urlEducation)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    for (let i = 0; i < data.work.length; i++)
        document.getElementById("work").innerHTML +=
        `<div class="box">
          <div class="year-company">
            <h5 class="heading-year">${data.work[i].year}</h5>
            <h5>${data.work[i].company}</h5>
          </div>
          <div class="text">
            <h4>${data.work[i].role}</h4>
            <p>
                ${data.work[i].about}
            </p>
          </div>
         </div>`;
});


/*----------------------------------------
-----------------EASTER EGGS---------------
-----------------------------------------*/ 

//Ändrar färgen på bodyn 
function changeBackgroundColor() {

  document.getElementById("body").style.backgroundColor = "pink";

}


//Popup vid keyboard-sekvens

document.addEventListener('DOMContentLoaded', () =>{
  'use strict';

  const code = ['1', '3', '3', '7'];
  let buffer = [];
  let lastKeyTime = Date.now();

  document.addEventListener('keydown', event => {
    const charList = '0123456789';
    const key = event.key.toLowerCase();
    
    if (charList.indexOf(key) === -1) 
      return;

    const currentTime = Date.now();  
    
    if (currentTime - lastKeyTime > 1000) {
      buffer = [];
    }
    
    buffer.push(key);
    lastKeyTime = currentTime;
    console.log(buffer);

    if (buffer.toString() === '1,3,3,7'){
      const modal_pop = document.getElementById('easter-egg');
      modal_pop.classList.add('show');
    }

    
  });

  
});


function closePopup() {
  const modal_pop = document.getElementById('easter-egg');
  modal_pop.classList.remove('show');
};
