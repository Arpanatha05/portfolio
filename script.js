// for home section
var typed = new Typed('#element', {
    strings: ['Frontend Devloper', 'Web designer','B-Tech IT student','Youtuber'],
    typeSpeed: 50,
  });
 //dark and light modde
 const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})


