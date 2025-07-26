// for home section
const menuButton = document.querySelector('.hamburger');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('active');
});



var typed = new Typed('#element', {
    strings: ['Frontend Devloper', 'Web designer','B-Tech IT student','Youtuber'],
    typeSpeed: 50,
  });
 //dark and light modde
 const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})
//this is skill section

function showTab(tabId) {
  const contents = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-buttons button');

  contents.forEach(content => {
    content.classList.remove('active');
  });

  buttons.forEach(button => {
    button.classList.remove('active');
  });

  document.getElementById(tabId).classList.add('active');
  document.getElementById('btn-' + tabId).classList.add('active');
}

// Show Skills tab by default
showTab('skills');

//skill container
document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".circle");
  circles.forEach(circle => {
    const percent = circle.getAttribute("data-percent");
    circle.style.background = `conic-gradient(#00e5ff ${percent}%, #1e2a38 ${percent}%)`;
  });
});
// //certificate
// const modal = document.getElementById('modal');
// const modalImage = document.getElementById('modalImage');
// const closeBtn = document.getElementById('closeBtn');
// const thumbnails = document.querySelectorAll('.thumbnail');

// thumbnails.forEach(thumb => {
//   thumb.addEventListener('click', () => {
//     modalImage.src = thumb.src;
//     modal.style.display = 'flex';
//   });
// });

// closeBtn.addEventListener('click', () => {
//   modal.style.display = 'none';
// });

// modal.addEventListener('click', (e) => {
//   if (e.target === modal) {
//     modal.style.display = 'none';
//   }
// });
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  const closeBtn = document.getElementById('closeBtn');

  // Use event delegation in case thumbnails are added dynamically
  document.addEventListener('click', (e) => {
    const clickedThumb = e.target.closest('.thumbnail');
    if (clickedThumb) {
      modalImage.src = clickedThumb.src;
      modal.style.display = 'flex';
    }
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalImage.src = ''; // clear image
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalImage.src = ''; // clear image
    }
  });

  // Optional: close modal with ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
      modalImage.src = '';
    }
  });
});

//contact section
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your message has been sent!");
  this.reset();
});



//know more
document.getElementById("btn1").addEventListener("click", function () {
  window.location.href = "bot.html"; // Change this if your home page is at a different path
});

 function goToaNewPage() {
      window.location.href = "index.html";
    }

//smooth under animation
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        entry.target.style.transitionDelay = `${index * 0.15}s`;
      }
    });
  }, {
    threshold: 0.1
  });

  reveals.forEach(el => observer.observe(el));