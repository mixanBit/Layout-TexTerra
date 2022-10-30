$('[data-sidebar="li"]').each(function() {
  $(this).on('click', function() {
    for(let i = 0; i < $('[data-sidebar="li"]').length; i++){
      $('[data-sidebar="li"]').each(function() {
        $(this).removeClass('sidebar__li--active')
      })
    }
    $(this).addClass('sidebar__li--active')
    $('[data-sidebar="container"]').removeClass('sidebar--active')
    $('[data-blackout="bakground"]').removeClass('blackout--active')
  })
})
