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
            var err=[];
            for (var i=0;i<elementsForm.length;i++){
                    var elem = valid(elementsForm[i],err);
                    console.log('valid',elem);
            }
        return elem;
        }

        let valid = (input,err)=>{
            let inputVal = input.value;
            let inputName = input.name;
            switch (input.name){
                case 'login':
                    if (inputVal === ''){
                        generateError(errorMess[0],input);
                        err.push(inputVal);
                        console.log(' err +=errorMess[0];', err);
                        
                    }
                    break;
                case 'password':
                    if (inputVal === ''){
                        generateError(errorMess[1],input);
                        err.push(inputVal);
                        console.log(' err +=errorMess[1];', err);
                        
                    }
                    break;
                case 'robot':
                    if (!input.checked){
                        generateError(errorMess[2],input);
                        err.push(input.checked);
                        console.log(' err +=errorMess[2];', err );
                        
                    }
                    break;
                case 'radio':
                    if ((input.checked) && (input.value=='yesRobot')){
                        generateError(errorMess[2],input);
                        err.push(inputVal);
                        console.log(' err +=errorMess[3];', err);
                    }
                break;
            }
            return err;
        }

        let generateError= (str,int)=>{
            let errorInputOther = int.parentNode.parentNode.querySelector('.error');
            const errorField = errorInputOther;
            errorField.style.display='block';
            errorField.innerText=str;
            if (int.parentNode.parentNode.matches('.form-row')){
                const formRow = int.closest('.form-row').classList.add('form-row_error');
                const formRow1 = int.parentNode.parentNode.querySelector('.input-back').classList.add('input-back_error-red');
            }
            else if (int.parentNode.parentNode.matches('.form-column')){
                const formcolumn = int.closest('.form-column').classList.add('form-column_error');
            }
        }

       let clearErrors=(form)=>{
           let error = form.querySelectorAll('.error');
           let row = form.querySelectorAll('.form-row');
           let column = form.querySelectorAll('.form-column');
           let inputBack = form.querySelectorAll('.input-back');
           console.log(inputBack);
                for(var i=0;i<error.length;i++){
                    if (error[i].hasAttribute('style')){
                        error[i].removeAttribute('style');
                    }
                }
                for(var i=0;i<row.length;i++){
                    if(row[i].classList.contains('form-row_error')){
                        row[i].classList.remove('form-row_error');
                    }
                  
                }
                for(var i=0;i<column.length;i++){
                    if(column[i].classList.contains('form-column_error'))
                        column[i].classList.remove('form-column_error');
                }
                for(var i=0;i<inputBack.length;i++){
                    if(inputBack[i].classList.contains('input-back_error-red'))
                        inputBack[i].classList.remove('input-back_error-red');
                }

        }
form.addEventListener('submit',function(e){
    e.preventDefault();
    clearErrors(this);
    var elements;
    elements = allElem();
    console.log('elements',elements);
    if (!elements.length){
        console.log('отправляем данные');
    }
})
}};

webglMobile.init();
validateForm.init();
flip.init();