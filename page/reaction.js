// JavaScript for handling interactions and data submission

// Function to go back (You can adjust it according to your need)
function goBack() {
    window.history.back();
  }
  
  // Function to log out (You can adjust it according to your need)
  function logout() {
    // Your logout logic here
    alert("Logged out successfully!");
  }
  
  // Function to submit reaction
  function submitReaction() {
    // Get user's email (you can adjust this according to how you handle user authentication)
    const userEmail = localStorage.getElementById("loggedInEmail"); // Example email
  
    // Get rating
    const rating = document.getElementById("rating").value;
  
    // Get comment
    const comment = document.getElementById("comment").value;
  
    // Validate if rating is provided
    if (!rating) {
      alert("Please provide a rating!");
      return;
    }
  
    // Validate if comment is provided
    if (!comment) {
      alert("Please provide a comment!");
      return;
    }
  
    // Create a new comment element
    const newComment = document.createElement("div");
    newComment.classList.add("comment");
  
    // Add user's email to the comment
    const emailUser = document.createElement("div");
    emailUser.classList.add("email-user");
    emailUser.innerHTML = "<p>" + userEmail + "</p>";
    newComment.appendChild(emailUser);
  
    // Add user's comment to the comment
    const paragraphComment = document.createElement("div");
    paragraphComment.classList.add("paragraph-comment");
    paragraphComment.innerHTML = "<p>" + comment + "</p>";
    newComment.appendChild(paragraphComment);
  
    // Add star rating
    const stars = document.createElement("div");
    stars.classList.add("stars");
    for (let i = 0; i < 5; i++) {
      const star = document.createElement("i");
      star.classList.add("fa", "fa-star");
      if (i < rating) {
        star.classList.add("checked");
      }
      stars.appendChild(star);
    }
    newComment.appendChild(stars);
  
    // Append the new comment to the existing comments container
    const reactionComment = document.getElementById("reactionComment");
    reactionComment.appendChild(newComment);
  
    // Clear rating and comment fields after submission
    document.getElementById("rating").value = "";
    document.getElementById("comment").value = "";
  
    // You can also send the rating and comment data to your backend for storage if needed
  }
  
  
  
  // Function to submit reaction
  function submitReaction() {
    // Get user's email (you can adjust this according to how you handle user authentication)
    const userEmail = localStorage.getItem("loggedInEmail"); // Example email
  
    // Get rating
    const rating = document.getElementById("rating").value;
  
    // Get comment
    const comment = document.getElementById("comment").value;
  
    // Validate if rating is provided
    if (!rating) {
      alert("Please provide a rating!");
      return;
    }
  
    // Validate if comment is provided
    if (!comment) {
      alert("Please provide a comment!");
      return;
    }
  
    // Create a new comment object
    const newComment = {
      email: userEmail,
      comment: comment,
      rating: rating
    };
  
    // Retrieve existing comments from localStorage or initialize as an empty array
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
  
    // Add the new comment to the array
    comments.push(newComment);
  
    // Save the updated comments array back to localStorage
    localStorage.setItem('comments', JSON.stringify(comments));
  
    // Clear rating and comment fields after submission
    document.getElementById("rating").value = "";
    document.getElementById("comment").value = "";
  
    // Refresh the comments display
    displayComments();
  }
  
  // Function to display comments
  function displayComments() {
    // Retrieve comments from localStorage
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
  
    // Get the container element for comments
    const reactionComment = document.getElementById("reactionComment");
  
    // Clear existing comments
    reactionComment.innerHTML = "";
  
    // Iterate over comments and create HTML elements to display them
    comments.forEach(commentObj => {
      const commentDiv = document.createElement("div");
      commentDiv.classList.add("comment");
  
      const emailUser = document.createElement("div");
      emailUser.classList.add("email-user");
      emailUser.innerHTML = "<p>" + commentObj.email + "</p>";
      commentDiv.appendChild(emailUser);
  
      const paragraphComment = document.createElement("div");
      paragraphComment.classList.add("paragraph-comment");
      paragraphComment.innerHTML = "<p>" + commentObj.comment + "</p>";
      commentDiv.appendChild(paragraphComment);
  
      const stars = document.createElement("div");
      stars.classList.add("stars");
      for (let i = 0; i < commentObj.rating; i++) {
        const star = document.createElement("i");
        star.classList.add("fa", "fa-star", "checked");
        stars.appendChild(star);
      }
      commentDiv.appendChild(stars);
  
      reactionComment.appendChild(commentDiv);
    });
  }
  
  // Call displayComments when the page loads to show existing comments
  window.onload = displayComments;
  