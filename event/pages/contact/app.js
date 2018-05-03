$(document).ready(function(){
	$('h1').css("display", "none").fadeIn(2000);
	$('.form-group').css("display", "none").delay(2000).slideDown(1000);
});

var main = function() {
	$('body').hide().fadeIn(600); 
  $('.info').val('');
  $('.btn').click(function() {
    var post = $('.status-box').val();
    $('<li>').text(post).prependTo('.posts');
    $('.status-box').val('');
    $('.counter').text('500');
    $('.btn').addClass('disabled'); 
  });
  
  $('.btn').click(function() {
    $('.info').val(''); 
  });
  
  $('.status-box').keyup(function() {
    var postLength = $(this).val().length;
    var charactersLeft = 500 - postLength;
    $('.counter').text(charactersLeft);
  
    if(charactersLeft < 0) {
      $('.btn').addClass('disabled'); 
    }
    else if(charactersLeft == 500) {
      $('.btn').addClass('disabled');
    }
    else {
      $('.btn').removeClass('disabled');
    }
  });
  
  $('.btn').addClass('disabled');
};

$(document).ready(main);