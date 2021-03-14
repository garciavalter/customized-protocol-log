const form = document.querySelector('form');

const links = {
    google: 'auth/google',
    login: 'auth/login'
}

console.log(form)

form.addEventListener('submit', e => {
    e.preventDefault();
    window.open(links[e.submitter.value], "_self");
});