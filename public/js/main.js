document.addEventListener("DOMContentLoaded", function(event) { 
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    }
    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7IFxyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICAgIGNvbnN0IG1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9nZ2xlPW1vZGFsXScpO1xyXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Nsb3NlJyk7XHJcbiAgICBjb25zdCBzd2l0Y2hNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdtb2RhbC0tdmlzaWJsZScpO1xyXG4gICAgfVxyXG4gICAgbW9kYWxCdG4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoTW9kYWwpO1xyXG4gIH0pO1xyXG5cclxuICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaE1vZGFsKTtcclxuXHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9