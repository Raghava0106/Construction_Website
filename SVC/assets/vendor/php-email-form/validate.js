
(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  
  var myForm = document.getElementById('myForm');
  var sentMessage = document.getElementById('sentMessage');

  myForm.addEventListener('submit', function (event) {
    
    event.preventDefault();

    
    sentMessage.style.display = 'block';

    
    setTimeout(function () {
      sentMessage.style.display = 'none';
    }, 3000);

    
    setTimeout(function () {
      myForm.reset();
    }, 3000);
  });

})();