// Funkcja do pokazania okienka popup
function showPopup(text) {
	const popup = document.getElementById("popup");
	const popupText = document.getElementById("popup-text");

	popupText.innerText = text; // Zmiana tekstu na wyświetlany
	popup.style.display = "block"; // Pokazanie popupu
}

// Funkcja do zamknięcia okienka popup
function closePopup() {
	const popup = document.getElementById("popup");
	popup.style.display = "none"; // Ukrycie popupu
}

// Dodanie nasłuchiwania na kliknięcie trójkątów
document.getElementById("triangle-1").addEventListener("click", () => {
	showPopup("Circuit Dreams, ul. Wita Stwosza");
});

document.getElementById("triangle-2").addEventListener("click", () => {
	showPopup("The Neural Pit, ul. Gliwicka");
});

document.getElementById("triangle-3").addEventListener("click", () => {
	showPopup("Phantom Reverb, ul. Korfantego");
});

// Zamknięcie popupu po kliknięciu przycisku
document.getElementById("close-popup").addEventListener("click", closePopup);
