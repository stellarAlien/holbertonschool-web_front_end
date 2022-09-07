function welcome(firstName, lastName){
    let fullname = firstName + ' ' + lastName;
    function displayFullName() {
        console.log('welcome ' +  fullname + '!')
    }
    displayFullName();
} welcome();