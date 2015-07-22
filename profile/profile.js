var template = document.getElementById("template").innerHTML,
		form = document.getElementById("form"),
		preview = document.getElementById("preview"),
		previewBtn = document.getElementById("previewBtn");

fillForm();

previewBtn.addEventListener("click", function() {
	var data = getFormData(),
		html = Mustache.render(template, data)

	preview.innerHTML = html;
	document.body.removeChild(form);
});

function getFormData() {
	return {
		title: getValue("title"),
		firstName: getValue("firstName"),
		lastName: getValue("lastName"),
		style: getValue("style"),
		address: getValue("address"),
		address2: getValue("address2"),
		city: getValue("city"),
		state: getValue("state"),
		zip: getValue("zip"),
		email: getValue("email"),
		website: getValue("website"),
		interests: getValue("interests"),
		style: getValue("style"),
		experience: getValue("experience")
	};
}

function getValue(id) {
	return document.getElementById(id).value;
}

function setValue(id, value) {
	document.getElementById(id).value = value;
}

function fillForm() {
	setValue("title", "Mr.");
	setValue("firstName", "Bob");
	setValue("lastName", "Smith");
	setValue("address", "123 Big St.");
	setValue("address2", "Apt. 2");
	setValue("city", "Boston");
	setValue("state", "MA");
	setValue("zip", "02115");
	setValue("email", "test@example.com");
	setValue("interests", "Sport, music, games");
	setValue("experience", "Big experience..............");
}