var flip = document.querySelector('.main-link').addEventListener('click',function(){
  document.querySelector('.welcome-flip').classList.add('flip');
  document.querySelector('.main-link').classList.add('authhide');
});

var flipBtn = document.getElementById('btn').addEventListener('click',function(){
  console.log('dgdg');
  document.querySelector('.welcome-flip').classList.remove('flip');
  document.querySelector('.main-link').classList.remove('authhide');
});