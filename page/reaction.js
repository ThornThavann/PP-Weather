// Function to go back (You can adjust it according to your need)
function goBack() {
    window.history.back();
}
  
// Function to log out (You can adjust it according to your need)
function logout() {
    // Your logout logic here
    localStorage.removeItem("loggedInEmail");
    window.location.href = "../index.html";
    alert("Logged out successfully!");
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
        // Create a container for the comment
        const commentContainer = document.createElement("div");
        commentContainer.classList.add("comment-container");
  
        // Create a comment element
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
  
        // Append the comment to the container
        commentContainer.appendChild(commentDiv);
  
        // Append the container to the reactionComment
        reactionComment.appendChild(commentContainer);
    });
}
  
// Call displayComments when the page loads to show existing comments
window.onload = displayComments;
