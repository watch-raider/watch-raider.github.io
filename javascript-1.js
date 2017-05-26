/*
//2014-15

$(document).ready(function() {
  $('.choice').hide();
  $('.seek').click(function() {
    $('.choice').slideToggle();
  });
});

//2013-14

$(document).ready(function() {
  $('.choice1').hide();
  $('.seek1').click(function() {
    $('.choice1').slideToggle();
  });
});

//2012-13

$(document).ready(function() {
  $('.choice2').hide();
  $('.seek2').click(function() {
    $('.choice2').slideToggle();
  });
});

//2011-12

$(document).ready(function() {
  $('.choice3').hide();
  $('.seek3').click(function() {
    $('.choice3').slideToggle();
  });
});

//2010-11

$(document).ready(function() {
  $('.choice4').hide();
  $('.seek4').click(function() {
    $('.choice4').slideToggle();
  });
});

*/

// choosing premier league year animation

$(document).ready(function() {
  $('.choice').hide();
  $('.seek').click(function() {
    $('.choice').hide(500);
    $(this).children('.choice').show(500);
    $('.seek').removeClass('blue');
    $(this).addClass('blue');
  })
  });

//Home Page button

$(document).ready(function() {
  $('button, #instruction').hide();
  $('button, #instruction').delay(1000).fadeIn('slow');
  $('#goal').hide();
 
//GOAL!!!
  $('button').hover(function() {
    $('#football').animate({top: '-=500px'}, 800);
    $('#goal').fadeIn('slow');
  });
  
  $('button').click(function() {
    $('button').fadeTo(1000, 0.6);
  });
});

