const migrateToFirstName = (attributes) => {
	let newAttrs = { ...attributes };

	Object.assign(newAttrs, {
		firstName: newAttrs.name,
	});

	const { name, ...otherAttrs } = newAttrs;

	return otherAttrs;
};

const migrateToLastName = (attributes) => {
	let newAttrs = { ...attributes };

	Object.assign(newAttrs, {
		lastName: newAttrs.surname,
	});

	const { surname, ...otherAttrs } = newAttrs;

	return otherAttrs;
};

const v1 = {
	attributes: {
		name: {
			type: "string",
		},
		surname: {
			type: "string",
		},
	},
	migrate(attributes) {
		console.log("v1");
		attributes = migrateToFirstName(attributes);
		attributes = migrateToLastName(attributes);

		return attributes;
	},
	isEligible(attributes) {
		return !attributes.firstName;
	},
};

const v2 = {
	attributes: {
		firstName: {
			type: "string",
		},
		surname: {
			type: "string",
		},
	},
	migrate(attributes) {
		console.log("v2");
		attributes = migrateToFirstName(attributes);
		attributes = migrateToLastName(attributes);

		return attributes;
	},
	isEligible(attributes) {
		return !attributes.lastName;
	},
};

export default [v2, v1];
