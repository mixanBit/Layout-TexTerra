window.onload = function() {
  $('[data-preloader="preloader"]').addClass('preloader--inactive')
  setTimeout(() => {
    $('[data-preloader="preloader"]').css('display', 'none')
  }, 500)
}
