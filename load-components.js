// Simple Component Loader
document.addEventListener('DOMContentLoaded', function() {
  
  // 1. LOAD HEADER
  fetch('header.html')
    .then(response => response.text())
    .then(html => {
      // Insert header at the beginning of body
      document.body.insertAdjacentHTML('afterbegin', html);
      
      // After header loads, initialize mobile menu
      initializeMobileMenu();
    })
    .catch(error => console.error('Error loading header:', error));
  
  // 2. LOAD FOOTER
  fetch('footer.html')
    .then(response => response.text())
    .then(html => {
      // Insert footer at the end of body
      document.body.insertAdjacentHTML('beforeend', html);
      
      // Update year in footer
      document.getElementById('year').textContent = new Date().getFullYear();
    })
    .catch(error => console.error('Error loading footer:', error));
  
});

// MOBILE MENU FUNCTIONALITY
function initializeMobileMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  
  if (!menuBtn || !mobileNav) return;
  
  // Toggle mobile menu
  function toggleMobile() {
    const isOpen = mobileNav.classList.toggle('open');
    mobileNav.setAttribute('aria-hidden', !isOpen);
    menuBtn.setAttribute('aria-expanded', isOpen);
  }
  
  // Close mobile menu
  function closeMobile() {
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', true);
    menuBtn.setAttribute('aria-expanded', false);
  }
  
  // Attach click event to menu button
  menuBtn.addEventListener('click', toggleMobile);
  
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!mobileNav.contains(e.target) && !menuBtn.contains(e.target)) {
      closeMobile();
    }
  });
  
  // Shrink header on scroll
  const headerTop = document.querySelector('.header-top');
  if (headerTop) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 60) {
        headerTop.style.padding = '6px 0';
      } else {
        headerTop.style.padding = '';
      }
    });
  }
  
  // Make closeMobile function available globally for onclick in links
  window.closeMobile = closeMobile;
}