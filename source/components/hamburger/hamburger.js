import './hamburger.scss';

var hamb =  document.getElementById('hamb').addEventListener('click',function() {
    this.querySelector('.hamburger--slider').classList.toggle('is-active');
    this.parentNode.parentNode.parentNode.parentNode.querySelector('.fixed').classList.toggle('fixed_shown');
});