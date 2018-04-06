import '../../assets/js/base.js';
import '../../components/fixedNav/fixedNav.js';
import hamb from '../../components/hamburger/hamburger.js';
import '../../components/header/header.js';
import '../../components/footer/footer.js';
import './blog.scss';

hamb.init();


let scrollArticle = {
    init(){
        let elem = document.querySelector('.content-right');
        let articles = document.querySelectorAll('.article');
        let links = document.querySelectorAll('.content-left__item');
        let href = document.querySelectorAll('.content-left__link');
        let textsOffset = [];
        var V=2;

        articles.forEach((article)=>{textsOffset.push(article.offsetTop)});
        console.log(textsOffset);
        window.addEventListener('scroll',()=>{
            textsOffset.forEach((offset,i)=>{
                if (window.pageYOffset >= offset){
                    links.forEach((el,i)=>{
                        el.classList.remove('content-left_active');
                    })
                links[i].classList.add('content-left_active');
                }
            })
        })

        // for(var i=0;i<href.length;i++){
        //     href[i].addEventListener('click',function(e){
        //         //e.preventDefault();
        //         var w = window.pageYOffset;
        //         //hash = this.href.replace(/[^#]*(.*)/, '$1');
        //         var t = document.querySelector(href[i]).getBoundingClientRect().top;
        //         var start = null;
        //     requestAnimationFrame(step);
        //     function step(time) {
        //     if (start === null) start = time;
        //     var progress = time - start;
        //     var r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
        //     window.scrollTo(0,r);
        //     if (r != w + t) {requestAnimationFrame(step)} else {location.href[i] = href[i]}
        //     }
        //     return false;
            
        //     })
        // }
    }
}

export default scrollArticle;

scrollArticle.init();
