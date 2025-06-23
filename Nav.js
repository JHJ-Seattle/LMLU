// Email submission
function submitEmail() {
  const email = document.getElementById("emailInput").value;
  if (email.trim()) {
    alert("Thank you for subscribing with: " + email);
    document.getElementById("emailInput").value = "";
  } else {
    alert("Please enter a valid email address.");
  }
}

// Mobile menu toggle
function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("show");
}