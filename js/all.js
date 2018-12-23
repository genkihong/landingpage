
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


$(document).ready(function(){
  //點選有這 2筆屬性的 a連結(登入和註冊 modal裡)
  $('a[data-dismiss="modal"][data-toggle="modal"]').on('click', function(){ 
    //將 a連結裡 data-target的值取出後，指定給 target
    var target = $(this).data('target'); 
    console.log('target', target);
    //在點選 a連結後，modal顯示結束後，在 body加入 class: modal-open
    $(target).on('shown.bs.modal', function(){ 
      $('body').addClass('modal-open');
    });
  });
});

