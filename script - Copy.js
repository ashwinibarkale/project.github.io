
/**
   * Active Nav Bar 
   */

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.menu a');
  
    function makeNavLinkActive() {
      const scrollPosition = window.scrollY;
  
      navLinks.forEach(function(link) {
        const section = document.querySelector(link.getAttribute('href'));
  
        if (
          section.offsetTop <= scrollPosition + 50 &&
          section.offsetTop + section.offsetHeight > scrollPosition + 50
        ) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  
    window.addEventListener('scroll', function() {
      makeNavLinkActive();
    });
  
    // Run the function initially to set the initial state of the navigation links
    makeNavLinkActive();
  });
  

  
  // JavaScript code for animating progress bars
  document.addEventListener("DOMContentLoaded", function () {
    let progressBars = document.querySelectorAll(".progress-bar");
  
    function animateProgressBar() {
      progressBars.forEach((progressBar) => {
        let max = progressBar.getAttribute("aria-valuemax");
        let value = progressBar.getAttribute("aria-valuenow");
        let width = (value / max) * 100;
        progressBar.style.width = `${width}%`;
      });
    }
  
    animateProgressBar();
  });
  
  
  
  document.addEventListener('DOMContentLoaded', function() {
    var scrollButton = document.querySelector('.scroll-up-button');
  
    // Show/hide the scroll button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 200) {
        scrollButton.classList.add('show');
      } else {
        scrollButton.classList.remove('show', 'dance');
      }
    });
  
    // Add dancing animation when the button is clicked
    scrollButton.addEventListener('click', function() {
      scrollButton.classList.add('dance');
      setTimeout(function() {
        scrollButton.classList.remove('dance');
      }, 1000);
      
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  

  
  // Add dancing effect to scroll down arrow
  document.addEventListener("DOMContentLoaded", function() {
    const scrollDownButton = document.querySelector(".scroll-down-button");
  
    scrollDownButton.addEventListener("mouseenter", function() {
      this.classList.add("dancing");
    });
  
    scrollDownButton.addEventListener("animationend", function() {
      this.classList.remove("dancing");
    });
  });
  
  
  /**
     * SCROLL UP BUTTON
     */
  
  
  window.addEventListener('scroll', function() {
    var scrollButton = document.getElementById('scroll-up-button');
    if (window.scrollY > 200) {
      scrollButton.classList.add('show');
    } else {
      scrollButton.classList.remove('show');
    }
  });
  
  
  
  
  
   
  
  
  
  
  
  








   
   