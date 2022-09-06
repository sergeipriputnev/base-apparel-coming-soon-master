const form = document.querySelector('form');
const input = document.querySelector('input');
const warnMessage = document.querySelector('.warn-message');
const btn = document.querySelector('.sub-button');
const warnSign = document.querySelector('.warn-sign');

const regEx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/



form.addEventListener('submit', function(e){
  e.preventDefault();
  console.log('SUBMITTED');
  if (input.value.match(regEx)){
    input.value = "";
    warnSign.classList.add('hidden');
    warnMessage.classList.add('green');
  warnMessage.innerText='THANK YOU!'}
    else 
    {warnMessage.classList.remove('green');
    warnSign.classList.remove('hidden');
    warnMessage.innerText = "Please provide a valid email";}
  }
)