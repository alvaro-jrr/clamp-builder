// check if an element is a number
function isNumber(element) {
	return !isNaN(element) || element instanceof Number;
}

// transform form data array to object
function formDataToObject(formDataArray) {
	const formDataObject = {};

	for (let item of formDataArray) {
		const [key, value] = item;

		formDataObject[key] = isNumber(value) ? Number(value) : value;
	}

	return formDataObject;
}

export { formDataToObject };
