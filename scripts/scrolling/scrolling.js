// jQuery Прокрутка
$(document).ready(function() {
  $('a[href^="#"], *[data-href^="#"]').on('click', function(e) {
    e.preventDefault();
    var t = 500;
    var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
    $('html,body').stop().animate({
      scrollTop: $(d).offset().top
    }, t);
  });
});