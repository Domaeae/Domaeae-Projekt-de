$(function () {
  const btn = $(".form-button");
  const btn_submit = $('.form-submit');
  const btn_md = $('.btn-md');
  const modal = $('.modal-section');


  /* <== EVENT| Button click
    | Waiting 0,5s for Ripple ==>*/
  // TODO: ...
  let vheight = $(window).height();
  let vwidth = $(window).width();
  console.log(vheight);
  console.log(vwidth);


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

});