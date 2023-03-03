
  fetch('https://backend-alpha-sandy.vercel.app')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#year').textContent = data.year;
 });
  module.exports = router;
  
