document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if(mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileBtn.querySelector('i');
      if(navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // Active Link Highlighting
  const currentLocation = location.href;
  const menuItems = document.querySelectorAll('.nav-links a');
  const menuLength = menuItems.length;
  for (let i = 0; i < menuLength; i++) {
    if (menuItems[i].href === currentLocation) {
      menuItems[i].classList.add("active");
    }
  }

  // Header Scroll Effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.padding = '15px 5%';
      header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
      header.style.padding = '20px 5%';
      header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
  });

  // Simple scroll animation for elements
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.service-card, .feature-item, .property-card, .testimonial-card').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
  });
});
