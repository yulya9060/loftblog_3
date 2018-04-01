var flip = document.querySelector('.welcome__main-link').addEventListener('click',function(){
  document.querySelector('.welcome-flip').classList.add('flip');
  document.querySelector('.welcome__main-link').classList.add('authhide');
  console.log('1');
});

var flipBtn = document.getElementById('btn').addEventListener('click',function(){
  console.log('dgdg');
  document.querySelector('.welcome-flip').classList.remove('flip');
  document.querySelector('.welcome__main-link').classList.remove('authhide');
});