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
                    console.log('2valid',elem,elementsForm[i]);
            }
            return elem;
            
        }

        let valid = (input)=>{
            let inputVal = input.value;
            let inputName = input.name;
            let err=" ";
            switch (input.name){
                case 'login':
                    if (inputVal == ''){
                        generateError(errorMess[0],input);
                        console.log(' err +=errorMess[0];', err +errorMess[0]);
                        err +=errorMess[0];
                    }
                    break;
                case 'password':
                    if (inputVal == ''){
                        generateError(errorMess[1],input);
                        console.log(' err +=errorMess[0];', err +errorMess[0]);
                        err +=errorMess[0];
                    }
                    break;
                case 'robot':
                    if (!input.checked){
                        generateError(errorMess[2],input);
                        console.log(' err +=errorMess[0];', err +errorMess[0]);
                        err +=errorMess[0];
                    }
                    break;
                case 'radio':
                    if ((input.checked) && (input.value=='yesRobot')){
                        generateError(errorMess[2],input);
                        console.log(' err +=errorMess[0];', err +errorMess[0]);
                        err +=errorMess[0];
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
                console.log('1',int.parentNode.matches('.form-row'));
            }
            else if (int.parentNode.parentNode.matches('.form-column')){
                const formRow = int.closest('.form-column').classList.add('form-column_error');
            }
            //const formColumn = int.closest('.form-row').classList.add('form-row_error');
            console.log(str,int);
        }

       let clearErrors=(form)=>{
           let error = form.querySelectorAll('.error');
           let row = form.querySelectorAll('.form-row');
           let column = form.querySelectorAll('.form-column');
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
        }
form.addEventListener('submit',function(e){
    e.preventDefault();
    clearErrors(this);
    //var errorHide= document.querySelectorAll('.error').style.display='none';
    // var formRow= this.querySelectorAll('.form-row').classList.remove('form-row_error');
    // var formColumn= document.querySelectorAll('.form-column').classList.remove('form-column_error');
    var elements = allElem();
    console.log('elements',elements);
    if (elements.length=0){
        console.log('отправляем данные');
    }
    
})
}};

webglMobile.init();
validateForm.init();
flip.init();