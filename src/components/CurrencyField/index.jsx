import {
	FormControl,
	OutlinedInput,
	InputLabel,
	InputAdornment,
} from "@mui/material";

const CurrencyField = ({ error }) => {
	return (
		<FormControl fullWidth sx={{ m: 1 }}>
			<InputLabel htmlFor='outlined-adornment-amount'>Precio</InputLabel>
			<OutlinedInput
				id='price'
				startAdornment={<InputAdornment position='start'>$</InputAdornment>}
				label='Precio'
				error={error}
			/>
		</FormControl>
	);
};

export default CurrencyField;
