const form = document.querySelector('form');

const links = {
    google: 'auth/google',
    login: 'auth/login'
}

console.log(form)

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(e);
    window.open(links[e.submitter.value], "_self");
  
/*    if(e.submitter.value === 'Google'){
        window.open("auth/google", "_self");
    }
    else if (e.submitter.value === 'Log In'){
        console.log('you clicked on log in');
    }
*/
});