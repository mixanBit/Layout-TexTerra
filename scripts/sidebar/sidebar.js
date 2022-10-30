$('[data-sidebar="btn"]').on('click', function() {
  $('body').css('overflow', 'hidden')
  $('[data-sidebar="container"]').toggleClass('sidebar--active')
  $('[data-blackout="bakground"]').toggleClass('blackout--active')
  checkBodyOverflow()
})

$('[data-blackout="bakground"]').on('click', function() {
  $('[data-sidebar="container"]').removeClass('sidebar--active')
  $(this).toggleClass('blackout--active')
  checkBodyOverflow()
})

// Убирает с 'body' 'overflow: hidden;' 
function checkBodyOverflow() {
  if($('.sidebar--active').length == 0){
    $('body').css('overflow', 'auto')
  }
}


