import '../../assets/js/base.js';
import '../../components/fixedNav/fixedNav.js';
import hamb from '../../components/hamburger/hamburger.js';
import '../../components/header/header.js';
import '../../components/footer/footer.js';
import blur from '../../assets/js/blur.js';
import './work.scss';
import '../../images/bkgs/list1200.png';

hamb.init();
let validateForm={
    init(){
        const form = document.querySelector('.form-review');
        const elementsForm = form.querySelectorAll('.auth-form__input');
        const errorMess	= [
            'Введите логин',
            'Введите пароль',
            'Роботам вход запрещен', // [0]
            'Введите Ваше имя', // [1]
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
                case 'name':
                    if (inputVal === ''){
                        generateError(errorMess[3],input);
                        err.push(inputVal);
                        console.log(' err +=errorMess[0];', err);
                        
                    }
                    break;
                case 'email':
                    if (inputVal === ''){
                        generateError(errorMess[4],input);
                        err.push(inputVal);
                        console.log(' err +=errorMess[1];', err);
                        
                    }
                    break;
                    case 'message':
                    if (inputVal === ''){
                        generateError(errorMess[7],input);
                        err.push(inputVal);
                        console.log(' err +=errorMess[1];', err);
                        
                    }
                    break;
            }
            return err;
        }

        let generateError= (str,int)=>{
            console.log('сосед',int.parentNode.parentNode.querySelector('.error'));
            let errorInputOther = int.parentNode.parentNode.querySelector('.error');
            console.log('errorInputOther',errorInputOther);
            const errorField = errorInputOther;
            errorField.style.display='block';
            errorField.innerText=str;
            if (int.parentNode.parentNode.matches('.auth-form-row')){

                    const formRow = int.closest('.auth-form-row').classList.add('form-row_error');
            }
            
        }

       let clearErrors=(form)=>{
           let error = form.querySelectorAll('.error');
           let row = form.querySelectorAll('.auth-form-row');
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

validateForm.init();
blur.init();

window.addEventListener('resize',function(){
    blur.init();
    console.log('1');
})
   
