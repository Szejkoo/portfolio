const icons = document.querySelectorAll(".icons");
icons.forEach((icon) => {
	icon.addEventListener("click", (event) => {
		icon.classList.toggle("open");
	});
});

const burger = document.querySelector(".hamburger");
const menu = document.querySelector("nav");
const link = document.querySelectorAll(".link");

burger.addEventListener("click", () => {
	menu.classList.toggle("active");
});

link.forEach((item) =>
	item.addEventListener("click", () => menu.classList.remove("active"))
);

link.forEach((cos) =>
	cos.addEventListener("click", () => burger.classList.remove("open"))
);
