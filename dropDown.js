const dropDownWrapp = document.querySelector(".drop-down-wrapp-first");
const dropDownWrapp2 = document.querySelectorAll(".search__drop-down-wrapp");
const dropDownWrapp3 = document.querySelector(".map-sec__search");

dropDownWrapp.addEventListener("click", (e) => {
	const miniModal = document.querySelector(".mini-modal");
	if (e.target.closest(".drop-down")) {
		e.target.classList.toggle("focus");
		miniModal.classList.toggle("hidden");
	}
});
dropDownWrapp2.forEach((el) => {
	el.addEventListener("click", (e) => {
		if (e.target.closest(".drop-down.search-drop-down1")) {
			const miniModal = document.querySelector(".search__mini-modal-child1");
			miniModal.classList.toggle("hidden");
		} else if (e.target.closest(".drop-down.search-drop-down2")) {
			const miniModal = document.querySelector(".search__mini-modal-child2");
			miniModal.classList.toggle("hidden");
		} else if (e.target.closest(".drop-down.search-drop-down3")) {
			const miniModal = document.querySelector(".search__mini-modal-child3");
			miniModal.classList.toggle("hidden");
		}
	});
});

dropDownWrapp3.addEventListener("click", (e) => {
	e.target.classList.toggle("focus");
	document
		.querySelector(".search__mini-modal-parent")
		.classList.toggle("hidden");
});
