let blur =  {
    init() {
        let wrapper = document.querySelector('.works-form');
        let form = document.querySelector('.blur');
        let background = document.querySelector('.about-me__bg');
        let imgWidth = background.offsetWidth;
        let imgHeight = background.offsetHeight;
        let posLeft = -wrapper.offsetLeft;
        // let posTop = -wrapper.offsetTop;
        

        let imgTop = background.offsetTop;
        let posTop = -(wrapper.offsetTop - imgTop);

        let blurCSS = form.style;
        blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
        // blurCSS.backgroundPosition = posLeft + 'px' + ' ' + -imgHeight + 'px';
        blurCSS.backgroundPosition = (posLeft+187) + 'px' + ' ' + (posTop+230) + 'px';
        // blurCSS.backgroundPosition = posLeft + 'px' + ' ' + '-100px';
        // blurCSS.backgroundPosition = (posLeft ) + 'px' + ' ' + 'bottom';
 
    }
    
}

module.exports = blur;