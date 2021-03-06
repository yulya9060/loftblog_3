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
        let textsOffset = [];

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
    }
}

export default scrollArticle;

scrollArticle.init();
