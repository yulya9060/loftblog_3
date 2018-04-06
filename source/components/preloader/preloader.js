import './preloader.scss';

let preloader = {
    init(){
        let preloader = document.getElementById('hellopreloader_preload');
        function preload(elem) {
            elem.style.opacity = 1;
            var interhellopreloader = setInterval(function(){
                elem.style.opacity = elem.style.opacity - 0.05;
                    if (elem.style.opacity <=0.05){ 
                        clearInterval(interhellopreloader);
                        preloader.style.display = "none";}
                    },10)
                        ;}
            window.addEventListener('load', function(){
                setTimeout(function(){
                    preload(preloader);
                },1000);
            })
    }
}

module.exports = preloader;
// var hellopreloader = document.getElementById("hellopreloader_preload");
//     function fadeOutnojquery(el){
//         el.style.opacity = 1;
//         var interhellopreloader = setInterval(function(){
//             el.style.opacity = el.style.opacity - 0.05;
//                 if (el.style.opacity <=0.05){ clearInterval(interhellopreloader);
//                     hellopreloader.style.display = "none";}},16)
//                     ;}
//         window.onload = function(){
//             setTimeout(function(){
//                 fadeOutnojquery(hellopreloader);
//             },1000);};