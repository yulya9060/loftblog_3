let flip = {
  init(){
    let link = document.querySelector('.welcome__main-link');
    let flipBtn = document.getElementById('btn0');
    let formFlip = document.querySelector('.welcome-flip');

    link.addEventListener('click',e=>{
      e.preventDefault();
      console.log('111');
      formFlip.classList.add('flip');
      link.classList.add('authhide');
    })

    flipBtn.addEventListener('click',e=>{
      e.preventDefault();
      console.log('222');
      formFlip.classList.remove('flip');
      link.classList.remove('authhide');
    })
    }
}
export default flip;