
// when the button is clicked a function will check if the username is: idanmagl@gmail.com.

//  and if the password is 1234

// if they are legit - the function will take the user to another webpage which says signed in successfully

//  if not - error will appear

// TODO: the error will appear above the wrong inputs.
//  make a help button --

//  that will get the user to a new page with an input box. --

// if the user puts the following email: idanmagled@gmail.com.

// TODO:  the password will appear for 4 seconds in the input box and then disappear



// build a new image with idan's image and add him a text bubble which says good job when entering the password right and error! when not.
// 

//create a nicely designed web page. --
//that gets email and password. --
//  with a sign in button --

const emailInput = document.querySelector('.emailInput');
const passwordInput = document.querySelector('.passwordInput');
const signInBtn = document.querySelector('.signInBtn');
const signInContainer = document.querySelector('.signInContainer');
const speechBubble = document.querySelector('#speechBubble');
const shame = document.querySelector('.shame');
const forgotPasswordInput = document.querySelector('.forgotPasswordInput');
const getSecretPasswordBTN = document.querySelector('.getSecretPasswordBTN');
const forgotPasswordContainer = document.querySelector('#forgotPasswordContainer');
const secretTextShame = document.querySelector('#secretTextShame');
const secretText = document.querySelector('.secretText');

function signInAttempt() {
  if (emailInput.value === 'idanmagl@gmail.com' && passwordInput.value === '1234') {
    window.location.href = "http://127.0.0.1:5500/1/success.html"
  } else {
    signInContainer.style.border = 'red solid 2px';
    speechBubble.style.visibility = 'visible';
    shame.style.visibility = 'visible';
  }
}

function forgotPassword() {
  if (forgotPasswordInput.value === 'idanmagled@gmail.com') {
    forgotPasswordInput.value = '1234';
    forgotPasswordInput.style.visibility = 'visible';
    setTimeout(function () {
      forgotPasswordInput.style.visibility = 'hidden';
    }, 4000);
  } else {
    forgotPasswordContainer.style.border = 'red solid 2px';
    secretTextShame.style.visibility = 'visible';
    secretText.style.visibility = 'hidden';

  }
}
