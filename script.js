const darkModeToggle = document.getElementById('darkModeToggle');
const icon = document.getElementById('icon');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Switch icons: sun <-> moon
  if (document.body.classList.contains('dark-mode')) {
    // Moon icon
    icon.innerHTML = `
      <path fill="yellow" d="M21.75 15.15a9 9 0 01-12.9-11.55 7.5 7.5 0 1012.9 11.55z"/>
    `;
    icon.setAttribute('fill', 'yellow');
  } else {
    // Sun icon (original)
    icon.innerHTML = `
      <path d="M12 4.354a7.646 7.646 0 0 0 0 15.292 7.646 7.646 0 0 0 0-15.292zM12 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm6.364 3.05a1 1 0 0 1 1.414 1.415l-1.415 1.414a1 1 0 1 1-1.414-1.414l1.415-1.415zM20 11a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2h2zm-3.05 6.364a1 1 0 0 1 1.415 1.414l-1.415 1.415a1 1 0 0 1-1.414-1.415l1.414-1.414zM12 19a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-6.364-3.05a1 1 0 1 1-1.414-1.414l1.414-1.415a1 1 0 0 1 1.415 1.415L5.636 15.95zM4 13a1 1 0 1 1 0-2H2a1 1 0 1 1 0 2h2zm3.05-6.364a1 1 0 0 1-1.415-1.414L7.05 4.172a1 1 0 1 1 1.415 1.414L7.05 6.636z"/>
    `;
    icon.setAttribute('fill', 'orange');
  }
});


// Show or hide sections when they enter/exit viewport
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
});

// Scroll to top button functionality
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
