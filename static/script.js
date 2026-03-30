let lastScroll = 0;
const navbar = document.getElementById("navbar");
const hero = document.getElementById("hero");

navbar.style.display="none"
window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
  let heroHeight = hero.offsetHeight;
    
  // 👉 Hero section logic
  if (currentScroll< heroHeight) {
    navbar.style.display="flex"
    navbar.classList.add("hero-hide");
    navbar.classList.remove("dark"); // light color
  } else {
    navbar.classList.remove("hero-hide");
    navbar.classList.add("dark"); // dark mode

    // 👉 Scroll behavior
    if (currentScroll > lastScroll) {
      navbar.classList.add("hide");
    } else {
      navbar.classList.remove("hide");
    }
  }

  lastScroll = currentScroll;
});