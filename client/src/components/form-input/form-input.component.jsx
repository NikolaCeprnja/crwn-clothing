import React from 'react';

import { GroupContainer, FormInputContainer, FormInputLabel } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherInputProps }) => (
	<GroupContainer>
		<FormInputContainer onChange={handleChange} {...otherInputProps} />
		{label ? (
			<FormInputLabel className={otherInputProps.value.length ? 'shrink' : ''}>{label}</FormInputLabel>
		) : null}
	</GroupContainer>
);

export default FormInput;
