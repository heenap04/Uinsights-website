

document.getElementById('circularElement').addEventListener('click', function() {
  var hiddenText = document.getElementById('hiddenText');
  if (hiddenText.style.display === 'none') {
    hiddenText.style.display = 'block';
  } else {
    hiddenText.style.display = 'none';
  }
});
var logoElement = $('footer .logo');

$(window).scroll(function() {
  
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
     
       $(logoElement).addClass('show');
     
   } else if($(logoElement).hasClass('show') && $(window).scrollTop() + $(window).height() > $(document).height() - 150) {
     
      $(logoElement).removeClass('show');
     
   }
});