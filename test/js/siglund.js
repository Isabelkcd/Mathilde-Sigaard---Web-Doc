const container = document.querySelector('.container-swipe');

document.querySelector('.slider').addEventListener ('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`)
})


function revealSlow() {
    var reveals = document.querySelectorAll(".reveal-slow");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", revealSlow);

  