function scrollToEventWeek() {
	// Zlokalizowanie sekcji "event-week" na stronie
	const eventSection = document.querySelector(".event-week");

	// Scrollowanie do tej sekcji
	eventSection.scrollIntoView({
		behavior: "smooth", // Płynne przewinięcie
		block: "start", // Wyrównanie do góry sekcji
	});
}

document.addEventListener("DOMContentLoaded", () => {
	const languageToggle = document.getElementById("language-toggle");
	const languageOptions = document.getElementById("language-options");

	// Pokazywanie i ukrywanie menu po kliknięciu
	languageToggle.addEventListener("click", () => {
		languageOptions.classList.toggle("hidden");
	});

	// Ukrywanie menu po kliknięciu poza nim
	document.addEventListener("click", (event) => {
		if (
			!languageOptions.contains(event.target) &&
			event.target !== languageToggle
		) {
			languageOptions.classList.add("hidden");
		}
	});

	// Zmiana języka po kliknięciu
	languageOptions.addEventListener("click", (event) => {
		if (event.target.classList.contains("language-option")) {
			languageToggle.textContent = event.target.textContent;
			languageOptions.classList.add("hidden");
		}
	});
});
