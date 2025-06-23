let teamIndex = 0;

function submitEmail() {
  const email = document.getElementById("emailInput").value;
  if (email.trim()) {
    alert("Thank you for subscribing with: " + email);
    document.getElementById("emailInput").value = "";
  } else {
    alert("Please enter a valid email address.");
  }
}

function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("show");
}

function slideTeam(direction) {
    const slider = document.querySelector('.team-grid');
    const cards = document.querySelectorAll('.team-card');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
  
    const total = cards.length;
    teamIndex = Math.min(Math.max(teamIndex + direction, 0), total - 1);
  
    const card = cards[teamIndex];
    const cardRect = card.getBoundingClientRect();
    const sliderRect = slider.getBoundingClientRect();
  
    // Calculate scroll so that the card is centered in the visible area
    const scrollLeft = slider.scrollLeft + (cardRect.left + cardRect.width / 2) - (sliderRect.left + sliderRect.width / 2);
  
    slider.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    });
  
    updateArrows();
  }  

function updateArrows() {
  const cards = document.querySelectorAll('.team-card');
  const leftArrow = document.getElementById('leftArrow');
  const rightArrow = document.getElementById('rightArrow');

  if (leftArrow) leftArrow.style.display = teamIndex === 0 ? 'none' : 'inline-block';
  if (rightArrow) rightArrow.style.display = teamIndex === cards.length - 1 ? 'none' : 'inline-block';
}

// Ensure arrows are correct and first card is centered after full load
window.addEventListener('load', () => {
  slideTeam(0);
});
