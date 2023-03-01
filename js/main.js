const menuBtn = document.getElementById("menu_btn");
const navMenu = document.getElementById("nav_menu");

menuBtn.addEventListener("click", () => {
	navMenu.classList.toggle("nav_menu");
	// this.style.display = "none";
});

// console.log(navmenu);
