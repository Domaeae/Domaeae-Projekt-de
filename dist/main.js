$(function () {
  const btn = $(".form-button");
  const btn_submit = $('.form-submit');

  function toggleClass() {
    this.classList.toggle("active");
  }

  function addClass() {
    this.classList.add("finished");
    btn_submit.text("");
    console.log("Message send!");
  }

  btn.click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
  });

// btn.on("", function () {});
btn.on("transitionend", toggleClass);
btn.on("transitionend", addClass);
  // btn.addEventListener("transitionend", toggleClass);
  // btn.addEventListener("transitionend", addClass);

});