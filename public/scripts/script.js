const form = document.querySelector('form');

console.log(form)

form.addEventListener('submit', e => {
    e.preventDefault();
    if(e.submitter.value){
        window.open("auth/google", "_self");
    }
});