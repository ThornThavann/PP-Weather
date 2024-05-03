//  // Select all elements with the "i" tag and store them in a NodeList called "stars"
//  const stars = document.querySelectorAll(".stars i");

//  // Loop through the "stars" NodeList and add click event listeners
//  stars.forEach((star, index) => {
//    star.addEventListener("click", () => {
//      // Loop through the stars again and toggle the "active" class based on the index
//      stars.forEach((s, i) => {
//        if (i <= index) {
//          s.classList.add("active");
//        } else {
//          s.classList.remove("active");
//        }
//      });
//    });
//  });
 
//  // Select all buttons with the class "rate-btn"
// const rateButtons = document.querySelectorAll(".rate-btn");

// // Select all elements with the class "stars" and store them in a variable
// const stars = document.querySelector(".stars");

// // Loop through each button and add a click event listener
// rateButtons.forEach(button => {
//   button.addEventListener("click", () => {
//     // Get the rating value from the button's data-rating attribute
//     const rating = parseInt(button.getAttribute("data-rating"));

//     // Loop through the stars and toggle the "active" class based on the rating value
//     stars.querySelectorAll("i").forEach((star, index) => {
//       if (index < rating) {
//         star.classList.add("active");
//       } else {
//         star.classList.remove("active");
//       }
//     });
//   });
// });


document.addEventListener("DOMContentLoaded", function() {
    const rateButtons = document.querySelectorAll(".rate-btn");
    const stars = document.querySelector(".stars");
    const commentInput = document.getElementById("comment-input");
    const submitButton = document.getElementById("submit-btn");
    const commentDisplay = document.getElementById("comment-display");
    const starDisplay = document.getElementById("star-display");
  
    let userRating = 0;
    let userComment = "";
  
    // Add event listeners to rate buttons
    rateButtons.forEach(button => {
      button.addEventListener("click", () => {
        userRating = parseInt(button.getAttribute("data-rating"));
        updateStarDisplay(userRating);
      });
    });
  
    // Add event listener to submit button
    submitButton.addEventListener("click", () => {
      userComment = commentInput.value;
      updateCommentDisplay(userComment);
    });
  
    // Function to update the star display
    function updateStarDisplay(rating) {
      stars.querySelectorAll("i").forEach((star, index) => {
        if (index < rating) {
          star.classList.add("active");
        } else {
          star.classList.remove("active");
        }
      });
    }
  
    // Function to update the comment display
    function updateCommentDisplay(comment) {
      commentDisplay.textContent = "Your comment: " + comment;
      starDisplay.innerHTML = "";
      for (let i = 0; i < userRating; i++) {
        const star = document.createElement("i");
        star.classList.add("fa", "fa-star", "active");
        starDisplay.appendChild(star);
      }
    }
  });
  