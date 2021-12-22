export const validateRegister = (
	email,
	password,
	confirmPassword
) => {
	let errors = {};


	if (!email) {
		errors.email = "Email can't be null!";
	} else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		errors.email = "Invalid email format!";
	}
	if (password !== confirmPassword) {
		errors.password = "Password and password confirmation must match!";
		errors.confirmPassword =
			"Password and password confirmation must match!";
	}

	console.log(errors);

	return errors;
};

export const validateLogin = (email, password) => {
	let errors = {};

	if (!email) {
		errors.email = "Email can't be empty";
	} else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		errors.email = "Invalid email format!";
	}

	if (!password) {
		errors.password = "Password can't be empty";
	}

	return errors;
};

export const validatePizza = (
	name,
	imageUrl,
numberOfProducts
) => {
	const errors = {};

	if (!name) {
		errors.name = "Title can't be empty";
	} else if (name.length < 3) {
		errors.name = "Title has to be at least two characters long!";
	}
	if (!imageUrl) {
		errors.imageUrl = "Image URI can't be empty!";
	} else if (!/https?:\/\/.*\.(?:png|jpg)/.test(imageUrl)) {
		errors.imageUrl = "Invalid image URI";
	}
	if (numberOfProducts === 0) {
		errors.numberOfProducts = "Products cant be 0!";
	}


	return errors;
};