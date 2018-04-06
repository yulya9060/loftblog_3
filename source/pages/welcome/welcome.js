import '../../assets/js/base.js';
import flip from './flip.js';
import '../../components/footer/footer.js';
import './welcome.scss';
import webgl from '../../assets/js/webGl.js';


window.addEventListener('load',function() {
    let container = window.innerWidth;
    console.log('1',container);
    if (container>780){
        console.log('2',container);
        webgl.init();
    }
});



const validate=()=>{
    console.log('22323');
    false;
};

const removeValidation=(fields)=>{
    for (var i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
          console.log('field is blank', fields[i]);
        }
}};

 const welcomeForm = document.querySelector('.form-auth');
 welcomeForm.addEventListener('submit',function(e){
    e.preventDefault();
    const fields = welcomeForm.querySelectorAll('.field');
    console.log(fields);
    removeValidation(fields);
    if (!validate){
        console.log('3434');
    }
});

console.log(welcomeForm);

flip.init();