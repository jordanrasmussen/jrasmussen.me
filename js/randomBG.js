//randomBG.js
//selects a random background on page load
//Jordan Rasmussen

jQuery(document).ready(function ($) {
  var random = Math.floor((Math.random() * 11) + 1); //1-11
  var path = encodeURI('images/banner/'+ random +'.jpg');
  $('#banner').css('background','url(' + path + ') 50% 0px no-repeat');
});

//coded with love.
