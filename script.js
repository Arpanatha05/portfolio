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
//certificate
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.getElementById('closeBtn');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    modalImage.src = thumb.src;
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
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
