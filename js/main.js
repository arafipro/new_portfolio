const menuBtn = document.getElementById("menu_btn");
const navMenu = document.getElementById("nav_menu");

// // console.log(navmenu);
window.addEventListener("scroll", function () {
  const scrollupButton = document.getElementById("scrollup");
  if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
    scrollupButton.style.display = "block";
  } else {
    scrollupButton.style.display = "none";
  }
});

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav_menu");
  this.style.display = "none";
});
