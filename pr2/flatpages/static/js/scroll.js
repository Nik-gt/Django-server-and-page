const rightBtn = document.querySelector('#right-button');
const leftBtn = document.querySelector('#left-button');
const conent = document.querySelector('#content');

var interval = null;

rightBtn.addEventListener('mouseenter', function() {
	interval = setInterval(function () {
	conent.scrollLeft += 7;}, 10);
});
rightBtn.addEventListener('mouseleave', function() {
clearInterval(interval);
});

leftBtn.addEventListener('mouseenter', function() {
	interval = setInterval(function () {
	conent.scrollLeft -= 7;}, 10);
});
leftBtn.addEventListener('mouseleave', function() {
clearInterval(interval);
});