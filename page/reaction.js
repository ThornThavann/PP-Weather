
const formEl = document.querySelector('.form-floating');

formEl.addEventListener('submit',()=>{
    Event.preventDefault();

    const formData = new formData(formEl);
    
});