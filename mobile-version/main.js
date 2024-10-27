let arthur = document.querySelector(".div-1");
let john = document.querySelector(".div-2");

let div4 = document.querySelector(".div-4");
let div5 = document.querySelector(".div-5");

let panels = [arthur, john];
let timeoutId;


panels.forEach((panel) => {
   panel.addEventListener('mouseover', () => {
      clearTimeout(timeoutId);
      if (panel === arthur) {
         div4.classList.add('arthur-poster')
         div5.innerHTML = '<p class="arthur-text">"We`re thieves in a world that don`t want us no more"</p>';
      }
      else {
         div4.classList.add('john-poster')
         div5.innerHTML = '<p class="john-text">"Guess about all I got left now is doubts. Doubts and scars"</p>';
      }
      div4.style.opacity = '1';
      div5.style.opacity = '1';
   })
   panel.addEventListener('mouseout', () => {
      if (panel === arthur) {
         div4.classList.remove('arthur-poster')
      }
      else {
         div4.classList.remove('john-poster')
      }
      div4.style.opacity = '0';
      div5.style.opacity = '0';

      timeoutId = setTimeout(() => {
         div5.innerHTML = ''; 
      }, 500); 
   })
})
