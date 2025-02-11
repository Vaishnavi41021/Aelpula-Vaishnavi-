document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("response").innerHTML = "Thank you, " + name + "! Your message has been sent.";
        document.getElementById("contact-form").reset();
    } else {
        document.getElementById("response").innerHTML = "Please fill out all fields.";
    }
});

