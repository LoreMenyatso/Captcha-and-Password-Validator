   
    // timeout before a callback is called

    let timeout;

    // traversing the DOM and getting the input and span using their IDs

    let password       = document.getElementById('PassEntry')
    let strengthBadge  = document.getElementById('StrengthDisp')
    let strengthBadge2 = document.getElementById('StrengthD2')
    let strengthBadge3 = document.getElementById('StrengthD3')
    let strengthBadge4 = document.getElementById('StrengthD4')
    let strengthBadge5 = document.getElementById('StrengthD5')
    let strengthBadge6 = document.getElementById('StrengthD6')
    let x              = document.getElementById("myDIV")
    x.style.display = "none"
    strengthBadge.style.display = "none"

    // The strong and weak password Regex pattern checker

    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
   
    
    function StrengthChecker(PasswordParameter){
    // We then change the badge's color and text based on the password strength

        if(strongPassword.test(PasswordParameter) && x.style.display === "none" ) {
            strengthBadge.style.backgroundColor = "green"
            strengthBadge.textContent = 'Strong'
            x.style.display = "block"
        } 
        else if(mediumPassword.test(PasswordParameter)){
            strengthBadge.style.backgroundColor = 'blue'
            strengthBadge.textContent = 'Medium'
            x.style.display = "block"
        } else{
            x.style.display = "none"
            strengthBadge.style.backgroundColor = 'red'
            strengthBadge.textContent = 'Weak' 
            strengthBadge2.textContent = "Use at least 8 characters"
            strengthBadge3.textContent = "Have at least one uppercase letter [A-Z]"
            strengthBadge4.textContent = "Have at least one lowercase letter [a-z]"
            strengthBadge5.textContent = "Have at least one digit [0-9]"
            strengthBadge6.textContent = "Have at least one special character [*-`]"
        }
    }


    // Adding an input event listener when a user types to the  password input 
    password.addEventListener("input", () => {

        //The badge is hidden by default, so we show it

        strengthBadge.style.display= 'block'
        clearTimeout(timeout);

        //We then call the StrengChecker function as a callback then pass the typed password to it

        timeout = setTimeout(() => StrengthChecker(password.value), 500);

        //Incase a user clears the text, the badge is hidden again

        if(password.value.length !== 0){
            strengthBadge.style.display != 'block'
        } else{
            strengthBadge.style.display = 'none'
        }
    });