document.getElementById('thm-btn').addEventListener('click', function () {
let sdtThm = document.body.classList.toggle('light-theme');
  localStorage.setItem('sdtThm', sdtThm);
}); 

if(JSON.parse(localStorage.getItem('sdtThm')) === false) {
  document.body.classList.remove('light-theme');
}