import { clamp } from "./modules/clampBuilderModule.js";
import { formDataToObject } from "./modules/helpers.js";

// form target
const clampForm = document.getElementById("clamp-form");

// handle submit event
function handleSubmit(event) {
	event.preventDefault();

	// extract form data
	const formData = formDataToObject(Array.from(new FormData(event.target)));

	// build objects to fit clamp function
	const fontSize = { min: formData["minFont"], max: formData["maxFont"] };
	const width = { min: formData["minWidth"], max: formData["maxWidth"] };

	// calculate clamp and show output
	event.target.result.value = clamp(fontSize, width);
}

clampForm.addEventListener("submit", handleSubmit);
