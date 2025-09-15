// Example: animate navbar background on scroll, maybe fade in hero content etc.

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

// Optionally, you can also add intersection observers to animate sections when they come into view

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach(section => {
    section.classList.add('section-hidden');
    observer.observe(section);
  });
});


