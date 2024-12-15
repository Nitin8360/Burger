document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents the form from refreshing the page

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Hardcoded valid credentials (replace with real backend check in a real app)
  const validUsername = "nitin1";
  const validPassword = "123";

  // Check if the credentials are correct
  if (username === validUsername && password === validPassword) {
    // Redirect to the home page (index.html)
    window.location.href = "index.html";
  } else {
    // Show error message
    errorMessage.textContent = "Invalid username or password!";
  }
});
