const table = document.querySelector(".table-with-options");
const modals = table.querySelectorAll(".mini-modal__wrapp");

table.addEventListener("click", (e) => {
	if (e.target.closest(".icon-3dot")) {
		modals.forEach((el) => {
			const dotId = Number(e.target.id.split("-").pop());
			const modalId = Number(el.id.split("-").pop());

			if (dotId !== modalId) {
				el.classList.remove("show");
			} else {
				if (el.closest(".show")) {
					el.classList.remove("show");
				} else {
					el.classList.add("show");
				}
			}
		});
	} else if (e.target.closest(".mini-modal__wrapp")) {
	} else {
		modals.forEach((el) => {
			el.classList.remove("show");
		});
	}
});
