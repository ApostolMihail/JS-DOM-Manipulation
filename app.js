function submitform(event) {
    event.preventDefault();
    
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var textArea = document.getElementById("text-area");
    var messageSubmit = document.getElementById("hidden-message");
    var specialChars = /[^a-zA-Z ]/g;
    var gender = document.querySelector('input[name = "gender"]:checked').value;
    
    if ( !firstName.value.match(specialChars) &&
         !lastName.value.match(specialChars) &&
        textArea.value) {
        messageSubmit.style.visibility = "visible";
        var message = document.createElement("span");
        message.innerHTML = 
                    '<i class="fas fa-check-circle"></i> Thank you for contacting us, ' + firstName.value + '<i id="x" class="fas fa-times"></i>';
        messageSubmit.appendChild(message);
    } 
    if (!firstName.value) {
        firstName.required = true;
    }
    if (!lastName.value) {
        lastName.required = true;
    }
    if (!textArea.value) {
        textArea.required = true;
    } 

    console.log(firstName.value);
    console.log(lastName.value);
    console.log(gender);
    console.log(textArea.value);
    
}
