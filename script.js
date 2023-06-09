// jQuery.noConflict();
// (function($) {
// 	$(window).on('load', function() { // loads the whole site
// 		$('#status').fadeOut(); // after loading fades out
// 		$('#preloader').delay(200).fadeOut('slow'); // delays the fade
// 	});
// })(jQuery);

// window.onload = function() {
// 	var elements = document.getElementsByClassName('txt-rotate');
// 	for (var i = 0; i < elements.length; i++) {
// 		var toRotate = elements[i].getAttribute('data-rotate');
// 		var period = elements[i].getAttribute('data-period');
// 		if (toRotate) {
// 			new TxtRotate(elements[i], JSON.parse(toRotate), period);
// 		}
// 	}
// 	// INJECT CSS
// 	var css = document.createElement("style");
// 	css.type = "text/css";
// 	css.innerHTML = ".txt-rotate > .wrap { border-right: 10px solid #240A5C }";
// 	document.body.appendChild(css);
// };

// var TxtRotate = function(el, toRotate, period) {
// 	this.toRotate = toRotate;
// 	this.el = el;
// 	this.loopNum = 0;
// 	this.period = parseInt(period, 1) || 2000;
// 	this.txt = '';
// 	this.tick();
// 	this.isDeleting = false;
// };

// TxtRotate.prototype.tick = function() {
// 	var i = this.loopNum % this.toRotate.length;
// 	var fullTxt = this.toRotate[i];

// 	if (this.isDeleting) {
// 		this.txt = fullTxt.substring(0, this.txt.length - 1);
// 	} else {
// 		this.txt = fullTxt.substring(0, this.txt.length + 1);
// 	}

// 	this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

// 	var that = this;
// 	var delta = 100 - Math.random() * 100;

// 	if (this.isDeleting) {
// 		delta /= 2;
// 	}

// 	if (!this.isDeleting && this.txt === fullTxt) {
// 		delta = this.period;
// 		this.isDeleting = true;
// 	} else if (this.isDeleting && this.txt === '') {
// 		this.isDeleting = false;
// 		this.loopNum++;
// 		delta = 100;
// 	}

// 	setTimeout(function() {
// 		that.tick();
// 	}, delta);
// };
setTimeout(function() {
  var animating = document.querySelectorAll('.highlighted.animating');
  for (var i = 0; i < animating.length; i++) {
    animating[i].classList.remove('animating');
  }
}, 2000);
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
	alert("The email Id is copied");
}