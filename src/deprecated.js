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
		let newAttrs = { ...attributes };

		Object.assign(newAttrs, {
			firstName: newAttrs.name,
		});

		const { name, ...otherAttrs } = newAttrs;

		return otherAttrs;
	},
	isEligible(attributes) {
		return attributes.name;
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
		let newAttrs = { ...attributes };

		Object.assign(newAttrs, {
			lastName: newAttrs.surname,
		});

		const { surname, ...otherAttrs } = newAttrs;

		return otherAttrs;
	},
	isEligible(attributes) {
		return attributes.surname;
	},
};

export default [v2, v1];
