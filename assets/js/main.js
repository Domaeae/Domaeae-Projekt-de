$((function(){const t=$(".form-button"),n=($(".form-submit"),$(".btn-md"));$(".modal-section");let o=$(window).height(),i=$(window).width();console.log(o),console.log(i),t.click((function(t){t.preventDefault(),$(this).toggleClass("active")})),t.on("transitionend",(function(){this.classList.toggle("active")})),t.on("transitionend",(function(){this.classList.add("finished"),n.text(""),console.log("Message send!")}))}));