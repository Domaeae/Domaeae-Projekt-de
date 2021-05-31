$(function () {
  const btn = $(".form-button");
  const btn_submit = $('.form-submit');
  const btn_md = $('.btn-md');
  const modal = $('.modal-section');
  const buttons = document.querySelectorAll('.ripple-effect');

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const ANIMATION_SPEED = 750;
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;
      const ripple = document.createElement('div');
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      button.appendChild(ripple);
      setTimeout(() => {
        ripple.remove();
      }, ANIMATION_SPEED);
    });
  });


  /* <== EVENT| Button click
    | Waiting 0,5s for Ripple ==>*/
  // TODO: ...
  let vheight = $(window).height();
  let vwidth = $(window).width();


  function toggleClass() {
    this.classList.toggle("active");
  }

  function addClass() {
    this.classList.add("finished");
    btn_md.text("");
    console.log("Message send!");
  }

  btn.click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
  });

  btn.on("transitionend", toggleClass);
  btn.on("transitionend", addClass);

  $.getScript("assets/js/navbar.min.js", function (data, textStatus, jqxhr) {});

  // Navigations Functions
  // ===============================
  let nav_height = $('.navigation').height();
  console.log(nav_height);
  $("body").scroll(function () {

  });


});