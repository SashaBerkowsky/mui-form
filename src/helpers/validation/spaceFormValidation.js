const a = {
	title: "",
	description: "",
	address: {
		label: "",
		value: {
			lat: 0,
			lng: 0,
		},
	},
	aditionalCharges: [{ label: "", value: "" }],
	services: [{ label: "", value: "" }],
	availability: [{ label: "", value: "" }],
	categories: [],
	phoneNumber: {
		countryCode: "",
		phoneNumber: "",
	},
};

const formValidation = {
	title: (value) => {
		return value !== "";
	},
	description: (value) => {
		return value !== "";
	},
	address: (value) => {
		return value !== "";
	},
	aditionalCharges: (value) => {
		return value.length !== 0;
	},
	services: (value) => {
		return value.length !== 0;
	},
	availability: (value) => {
		return value.length !== 0;
	},
	categories: (value) => {
		return value.length !== 0;
	},
	phoneNumber: (value) => {
		return value.number !== "" && value.countryCode !== "";
	},
	price: (value) => {
		return value !== "";
	},
};

export default formValidation;
