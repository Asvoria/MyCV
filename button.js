var btn = document.getElementById('#btnup');

$(window).scroll(function() {
  if ($(window).scrollTop() > 200) {
    btn.visibility('show');
  } else {
    btn.visibility('hidden');
  }
});

btn.click(function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '200');
});