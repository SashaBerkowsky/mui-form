import { useState } from "react";
import { Button, TextField, Stack } from "@mui/material";
import CurrencyField from "../CurrencyField";
import MultiSelect from "../MultiSelect";
import PhoneNumberField from "../PhoneNumberField";
import { SpaceModel } from "../../models";
import { spaceFormValidation } from "../../helpers";

const CustomForm = () => {
	const initialFormData = SpaceModel;

	const [spaceFormData, setSpaceFormData] = useState({
		title: "",
		description: "",
		address: "",
		aditionalCharges: [],
		services: [],
		availability: [],
		categories: [],
		phoneNumber: {
			countryCode: "",
			phoneNumber: "",
		},
		price: "",
	});
	const [formErrors, setFormErrors] = useState({
		title: false,
		description: false,
		address: false,
		aditionalCharges: false,
		services: false,
		availability: false,
		categories: false,
		phoneNumber: false,
		price: false,
	});

	function handleInputUpdate(field, newValue) {
		const updatedState = { ...spaceFormData };
		updatedState[field] = newValue;
		setSpaceFormData(updatedState);
		console.log(spaceFormData[field]);
	}

	function handleValidation() {
		let isFormValid = true;
		const updatedErrors = { ...formErrors };

		for (let key in spaceFormData) {
			const validationFunction = spaceFormValidation[key];
			const validationValue = spaceFormData[key];
			const isFieldValid = validationFunction(validationValue);

			isFormValid = isFormValid && isFieldValid;
			updatedErrors[key] = !isFieldValid;
		}

		setFormErrors({ ...updatedErrors });
		console.log(isFormValid);

		return isFormValid;
	}

	function submitForm() {
		handleValidation();
	}

	return (
		<Stack
			sx={{
				width: "50%",
			}}
			spacing={2}
			component='form'
		>
			<TextField
				id='space-title'
				label='Titulo'
				variant='outlined'
				value={spaceFormData.title}
				onChange={(event) => handleInputUpdate("title", event.target.value)}
				error={formErrors.title}
				helperText='asd'
			/>
			<TextField
				id='space-description'
				label='Descripcion'
				variant='outlined'
				rows={4}
				value={spaceFormData.description}
				onChange={(event) =>
					handleInputUpdate("description", event.target.value)
				}
				multiline
				error={formErrors.description}
			/>
			<TextField
				id='space-address'
				label='Dejanos una ubicacion de referencia'
				variant='outlined'
				onChange={(event) => handleInputUpdate("address", event.target.value)}
				error={formErrors.address}
			/>
			<MultiSelect
				id='space-aditional-charges'
				label='Selecciona Cargos Adicionales'
				placeholder='Cargos Adicionales'
				field='aditionalCharges'
				onChange={handleInputUpdate}
				error={formErrors.aditionalCharges}
			/>
			<MultiSelect
				id='space-services'
				label='Selecciona características de tu espacio'
				placeholder='Características de tu espacio'
				field='services'
				onChange={handleInputUpdate}
				error={formErrors.services}
			/>
			<MultiSelect
				id='space-category'
				label='Selecciona el uso que se le da a tu espacio'
				placeholder='Uso que se le da a tu espacio'
				field='categories'
				onChange={handleInputUpdate}
				error={formErrors.categories}
			/>
			<MultiSelect
				id='space-availability'
				label='Selecciona el tipo de alquiler'
				placeholder='Tipo de alquiler'
				field='availability'
				onChange={handleInputUpdate}
				error={formErrors.availability}
			/>
			<CurrencyField id='space-price' error={formErrors.price} />
			<CurrencyField id='space-price' error={formErrors.price} />
			<PhoneNumberField
				id='space-phone-number'
				onChange={handleInputUpdate}
				error={formErrors.phoneNumber}
			/>
			<Button size='large' onClick={submitForm} variant='contained'>
				Contained
			</Button>
		</Stack>
	);
};

export default CustomForm;
