// Function to be called when the user submits the form
function formSubmitHandler(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    var feedback = document.getElementById("textInput").value;
    document.getElementById("output").innerText = "Feedback: " + feedback;
}

// Adding an event listener to the form for submit event
var form = document.getElementById("myForm");
form.addEventListener("submit", formSubmitHandler);

// Function to be called when the user clicks on the rating scale
// function ratingClickHandler(event) {
//     var ratingValue = event.target.dataset.value;
//     document.getElementById("rating").innerText = "Rate: " + ratingValue;
// }

// // Adding an event listener to the rating scale
// var ratingScale = document.getElementById("rating");
// ratingScale.addEventListener("click", ratingClickHandler);
