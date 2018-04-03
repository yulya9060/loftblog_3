import './hamburger.scss';

let hamb = {
    init() {
        let bodyNode = document.body || document.getElementsByTagName('body')[0];
        let hamburger = document.getElementById('hamb');
        let hambSlider = document.querySelector('.hamburger--slider');
        let fixed = document.querySelector('.fixed');
        hamburger.addEventListener('click',()=>{
            hambSlider.classList.toggle('is-active');
            fixed.classList.toggle('fixed_shown');
            bodyNode.classList.toggle('body_overflow');
        })
    }
}

export default hamb;
