import './hamburger.scss';
var bodyNode = document.body || document.getElementsByTagName('body')[0];
var hamb =  document.getElementById('hamb').addEventListener('click',function() {
    this.querySelector('.hamburger--slider').classList.toggle('is-active');
    this.parentNode.parentNode.parentNode.parentNode.querySelector('.fixed').classList.toggle('fixed_shown');
    console.log('sffsf'+bodyNode);
        bodyNode.classList.toggle('body_overflow');
});