import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
    try {
        console.log(JSON.parse(localStorage.setItem('feedback-form-state')));
        event.preventDefault();
        localStorage.clear();
        event.currentTarget.reset();
        localStorage.removeItem('feedback-form-state');
    }
    catch (error) {
        console.error;
    } 
}

feedbackForm.addEventListener('input', throttle(onFormData, 500));

const formData = {};

function onFormData(event) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    
}

function dataFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    if (data) {
        email.value = data.email || '';
        message.value = data.message || '';
        console.log(data);
    }
    return;
};

dataFromLocalStorage()