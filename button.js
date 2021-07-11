var btn = $('#btnup');

$(window).scroll(function() {
  if ($(window).scrollTop() > 200) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.click(function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});