import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.querySelector('input[name="email"]');
const message = form.querySelector('textarea[name="message"]');
const STOREGE_KEY = 'feedback-form-state';


form.addEventListener('submit', submitForm);
email.addEventListener('input', throttle(onTextareaInput, 500))
message.addEventListener('input', throttle(onTextareaInput, 500))

updateFormState();

const state = {
    email: email.value,
    message: message.value
  };

function onTextareaInput() {    
    state[email.name] = email.value;
    state[message.name] = message.value;

    localStorage.setItem(STOREGE_KEY, JSON.stringify(state))
};

function submitForm(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STOREGE_KEY);
    console.log(state);
} 

function updateFormState(){
    const state = JSON.parse(localStorage.getItem(STOREGE_KEY));
    if (state) {
    email.value = state.email || '';
    message.value = state.message || '';
    }
    

}