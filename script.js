function showMessage() {

    alert("Thank you for choosing Brew Haven Café!");

}

document
.querySelector(".contact-form")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Message sent successfully!");

});