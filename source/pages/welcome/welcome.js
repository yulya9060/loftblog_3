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
        const form = document.querySelector('.form-auth');
        const elementsForm = form.querySelectorAll('.field');
        const notInput =['button','span','div']
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

        let allElem = ()=>{
            for (var i=0;i<elementsForm.length;i++){
                    var elem = valid(elementsForm[i]);
                    console.log('1',elementsForm[i]);
                    console.log('2',elem);
                    return elem;
            }
            
        }

        let valid = (input)=>{
            let inputVal = input.value;
            let inputName = input.name;
            let err =false;
            switch (input.name){
                case 'login':
                    if (inputVal == ''){
                        generateError(errorMess[0],input);
                        err =true;
                    }
                    break;
                case 'password':
                    if (inputVal == ''){
                        generateError(errorMess[1],input);
                        err =true;
                    }
                    break;
                case 'robot':
                    if (!input.checked){
                        generateError(errorMess[2],input);
                        err =true;
                    }
                    break;
                case 'radio':
                    if (input.checked){
                        if(input.value=='noRobot')
                        generateError(errorMess[2],input);
                        err =true;
                    }
                    if (!input.checked){
                        generateError(errorMess[2],input);
                        err =true;
                    }
                break;
            }
            return err;
        }

        let generateError= (str,int)=>{
            console.log(str,int.parentNode.parentNode);
            const errorField = int.type=='radio'? int.parentNode.parentNode.previousElementSibling.querySelector('.error') : int.parentNode.parentNode.querySelector('.error');
            errorField.style.display='block';
            errorField.innerText=str;
            const formRow = int.closest('.form-row').classList.add('form-row_error');
            console.log(str,int);
        }

form.addEventListener('submit',function(e){
    e.preventDefault();
    var elements = allElem();
    if (!elements){
        console.log('отправляем данные');
    }
    
})
}};

webglMobile.init();
validateForm.init();
flip.init();