// Dark Mode toggle
function toggleMode() {
  document.body.classList.toggle("dark-mode");
}

// Show sections when they enter viewport
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight - 50) {
      section.classList.add('visible');
    }
  });
});

// Optional: Scroll to top button functionality
window.onscroll = function() {
  const topBtn = document.getElementById("topBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
