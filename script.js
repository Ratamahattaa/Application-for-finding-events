function scrollToEventWeek() {

	const eventSection = document.querySelector(".event-week");

	eventSection.scrollIntoView({
		behavior: "smooth", 
		block: "start", 
	});
}



document.addEventListener("DOMContentLoaded", () => {
	const languageToggle = document.getElementById("language-toggle");
	const languageOptions = document.getElementById("language-options");
	const descriptionElement = document.getElementById("event-description"); 

	
	languageToggle.addEventListener("click", () => {
		languageOptions.classList.toggle("hidden");
	});

	
	function loadEventDescription(language) {
		let filePath = "";
		if (language === "PL") {
			filePath = "text/event-detailsPL.txt";
		} else if (language === "EN") {
			filePath = "text/event-detailsEN.txt";
		}

		
		fetch(filePath)
			.then((response) => response.text())
			.then((data) => {
				descriptionElement.innerHTML = data; 
			})
			.catch((error) => {
				console.error("Błąd podczas ładowania pliku:", error);
			});
	}

	
	languageOptions.addEventListener("click", (event) => {
		if (event.target.classList.contains("language-option")) {
			const selectedLanguage = event.target.textContent; 
			const currentLanguage = languageToggle.textContent; 

			
			languageToggle.textContent = selectedLanguage;
			event.target.textContent = currentLanguage;

			languageOptions.classList.add("hidden"); 

			
			if (selectedLanguage === "Polski") {
				loadEventDescription("PL");
			} else if (selectedLanguage === "English") {
				loadEventDescription("EN");
			}
		}
	});

	
	document.addEventListener("click", (event) => {
		if (
			!languageOptions.contains(event.target) &&
			event.target !== languageToggle
		) {
			languageOptions.classList.add("hidden");
		}
	});
});
