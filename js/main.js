const header = document.getElementById("header");
const scroll = document.getElementById("scroll");
const headMenuBtn = document.getElementById("head_menu_btn");
const heroMenuBtn = document.getElementById("hero_menu_btn");
const navMenu = document.getElementsByClassName("nav_menu");

// ヘッダーメニュー固定
const obs = new IntersectionObserver(
  (entries) => {
    header.classList.toggle("sticky", !entries[0].isIntersecting);
  },
  { rootMargin: "1100px 0px 0px 0px" }
);
obs.observe(scroll);

window.addEventListener("scroll", function () {
  const scrollupButton = document.getElementById("scrollup");
  if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
    scrollupButton.style.display = "block";
  } else {
    scrollupButton.style.display = "none";
  }
});

headMenuBtn.addEventListener("click", () => {
	console.log("clicked");
	navMenu.classList.toggle("nav-active");
});

heroMenuBtn.addEventListener("click", () => {
  console.log("clicked");
});
