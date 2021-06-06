var time_min = 0;

$(function () {
  const btn = $(".form-button");
  const btn_submit = $('.form-submit');
  const btn_md = $('.btn-md');
  const modal = $('.modal-section');
  const buttons = document.querySelectorAll('.ripple-effect');
  const $navbar_fix = $('.nav-fixed-main');
  const $navbar_height = $('.navigation').height();

  console.log($navbar_fix);

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
  $("body").scroll(function () {});

  function navbar_fixer() {
    $('main').css('padding-top', $navbar_fix);
  }



  function startTimer() {
    const difference = +new Date("2025-01-01") - +new Date();
    let remaining = "Time's up!";

    if (difference > 0) {
      const parts = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
      remaining = Object.keys(parts).map(part => {
        return `${parts[part]} ${part}`;
      }).join(" ");
    }
    time_min = Math.floor((difference / 1000) % 60);

    // time_min = Math.floor

    document.getElementById("countdown").innerHTML = remaining;
  }
  startTimer();


  var el = document.getElementById('graph'); // get canvas

  var options = {
    percent: el.getAttribute('data-percent') || 25,
    size: el.getAttribute('data-size') || 220,
    lineWidth: el.getAttribute('data-line') || 15,
    rotate: el.getAttribute('data-rotate') || 0
  }

  var canvas = document.createElement('canvas');
  var span = document.createElement('span');
  span.textContent = options.percent + '%';

  if (typeof (G_vmlCanvasManager) !== 'undefined') {
    G_vmlCanvasManager.initElement(canvas);
  }

  var ctx = canvas.getContext('2d');
  canvas.width = canvas.height = options.size;

  el.appendChild(span);
  el.appendChild(canvas);

  ctx.translate(options.size / 2, options.size / 2); // change center
  ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

  //imd = ctx.getImageData(0, 0, 240, 240);
  var radius = (options.size - options.lineWidth) / 2;

  var drawCircle = function (color, lineWidth, percent) {
    percent = Math.min(Math.max(0, percent || 1), 1);
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
    ctx.strokeStyle = color;
    ctx.lineCap = 'round'; // butt, round or square
    ctx.lineWidth = lineWidth
    ctx.stroke();
  };

  drawCircle('#efefef', options.lineWidth, 100 / 100);
  drawCircle('#555555', options.lineWidth, options.percent / 100);


  function updateChart() {
    let xy = time_min;
    $('.chart').attr('data-percent', "50");
    console.log($('.chart').attr('data-percent'));
  };



  setInterval(startTimer, 1000);
  setInterval(updateChart(), 1000);
});