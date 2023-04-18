var nav = document.querySelector('nav'); // Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY <= 80) { // Just an example
        nav.style.backgroundColor = 'transparent'; // or default color
        nav.style.borderBottom = 'transparent';
        nav.style.height = '';
    } else {
        nav.style.backgroundColor = '#272422'; 
        nav.style.borderBottom = '2px solid #2D2B29';
        nav.style.height = '80px';
    }
});
var tooltip = document.querySelectorAll('.imgtooltip');

document.addEventListener('mousemove', fn, false);

function fn(e) {
    for (var i=tooltip.length; i--;) {
        tooltip[i].style.left = e.pageX + 'px';
        tooltip[i].style.top = e.pageY + 'px';
    }
}
window.addEventListener('scroll', throttle(parallax, 14));

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
};

function parallax() {
  var scrolled = window.pageYOffset;
  var parallax = document.querySelector("#parallax");
  // You can adjust the 0.4 to change the speed
	var coords = (scrolled * .15) + 'px'
  parallax.style.transform = 'translateY(' + coords + ')';
};
