const icons = document.querySelectorAll(".icons");
icons.forEach((icon) => {
	icon.addEventListener("click", (event) => {
		icon.classList.toggle("open");
	});
});
