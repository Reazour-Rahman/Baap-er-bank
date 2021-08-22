document.getElementById('get-btn').addEventListener('click',
function () {
    const emailField = document.getElementById('get-text');
    const getText = emailField.value;
    // console.log(getText)
    // get useer password
    const passwordField = document.getElementById('get-pass');
    const getPass = passwordField.value;


    if (getText =='alexrabbi111@gmail.com' && getPass == 'illustriousss' ) {
        window.location.href='banking.html';
    }
    
})

