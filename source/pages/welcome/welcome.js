import '../../assets/js/base.js';
import flip from './flip.js';
import '../../components/footer/footer.js';
import './welcome.scss';
import webgl from '../../assets/js/webGl.js';


let webglMobile={
    init(){
        window.addEventListener('load',function() {
            let container = window.innerWidth;
            if (container>780){
                webgl.init();
            }
        });
    }
};

let validateForm={
    init(){
        const welcomeForm = document.querySelector('.form-auth');
        const errorField = welcomeForm.querySelectorAll('.error');
        const errorMess	= [
            'Введите логин',
            'Введите пароль',
            'Роботам вход запрещен', // [0]
            'Введите Ваше реальное имя', // [1]
            'Укажите Ваш электронную почту', // [2]
            'Неверный формат электронной почты', // [3]
            'Укажите тему сообщения', // [4]
            'Напишите текст сообщения', // [5]
            'Ваше сообщение похоже на спам, уберите специальные символы.' // [6]
        ]
        let validate=(fields)=>{
            
            if (!fields.login.value){
                generateError(errorMess[0],fields.login);
                console.log('1',errorMess[0],fields.login);
                return false;
            }
            if (!fields.password.value){
                generateError(errorMess[1],fields.password);
                console.log('2',errorMess[1]);
                return false;
            }

            if (!fields.robot.checked){
                generateError(errorMess[2],fields.robot);
                console.log('3',errorMess[2]);
                return false;
            }
            if (fields.radio[4].checked){
                generateError(errorMess[2],fields.radio);
                console.log('4',errorMess[2]);
                return false;
            }

            return true;
        }
        
    

    let removeValidation=(form)=>{
        var errors = form.querySelectorAll('.error');
        for (var i = 0; i < errors.length; i++) {
            errors[i].style.display='none';
  }
}
let generateError = (text,field)=> {
    for (var i = 0; i < errorField.length; i++) {
        errorField[i].innerHTML = text;
        errorField[i].style.display='block';
        console.log(errorField[i]);
  }
}

welcomeForm.addEventListener('submit',function(e){
    e.preventDefault();
    const fields = this.querySelectorAll('.field');
    console.log('fields ',fields);
    console.log('form ',this.length);
    removeValidation(this);
    validate(this);
    if (validate){
        console.log('3434');
    }
})

}
};

webglMobile.init();
validateForm.init();
flip.init();