var express = require('express');
var router = express.Router();
var fetch = require('fetch')

document.querySelector('https://backend-alpha-sandy.vercel.app/date').textContent;
  fetch('https://backend-alpha-sandy.vercel.app/date')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#year').textContent = data.year;
 });
  module.exports = router;
  
