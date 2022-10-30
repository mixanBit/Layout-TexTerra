let languageHtml = document.querySelectorAll('.language-html')

$('.code-copy').each(function(index) {
  $(this).on('click', function() {

    // выделяем котнтент внутри блока
    let range = document.createRange();
    range.selectNode(languageHtml[index]); 
    window.getSelection().addRange(range); 

    //попытка скопировать текст в буфер обмена
    try { 
    document.execCommand('copy'); 
    
    $('[data-notification="code-copy"]').addClass('notification-code-copy--active')
    setTimeout(() => {
      $('[data-notification="code-copy"]').removeClass('notification-code-copy--active')
    }, 1000)
      
    } catch(err) { 
      console.log('Can`t copy, boss'); 
    } 
    
    //очистка выделения текста
    window.getSelection().removeAllRanges();
  })
})