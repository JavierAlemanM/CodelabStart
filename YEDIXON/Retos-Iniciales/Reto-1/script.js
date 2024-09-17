document.addEventListener("DOMContentLoaded", function() {
   let body = document.querySelector("body");
   let button = document.getElementById("btn");
   let isNight = false;

   button.onclick = () => {
      isNight = !isNight;
      body.style.setProperty('--value', isNight ? 'var(--background-night)' : 'var(--background-day)');
   
      body.style.setProperty('--circle-border', isNight ? 'var(--circle-border-night)' : 'var(--circle-border-day)');

      body.style.setProperty('--container-color', isNight ? 'var(--container-color-night)' : 'var(--container-color-day)');
   }
});