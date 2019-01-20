import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isEmpty } from 'utils/core-util';

const SelectContainer = styled.select`
	width: 100%;
	height: calc(2.25rem + 2px);
	/* padding: 0.375rem 0.75rem; */
	background-color: #0000;
	border: 1px solid #0000;
	-webkit-appearance: none;
	border-radius: 0px;
	background-image: url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0Jz48cGF0aCBmaWxsPScjNDQ0JyBkPSdNNy40MDYgNy44MjhsNC41OTQgNC41OTQgNC41OTQtNC41OTQgMS40MDYgMS40MDYtNiA2LTYtNnonPjwvcGF0aD48L3N2Zz4=');
	background-position: 6rem 50%;
	background-repeat: no-repeat;
	&:-moz-focusring {
		color: transparent;
		text-shadow: 0 0 0 #000;
	}
`;

const Select = ({
 options, onChange, value, placeholder
}) => (
	<SelectContainer value={value} onChange={onChange}>
		<option value={value !== '' ? value : placeholder} hidden>
			{value !== '' ? value : placeholder}
		</option>
		{!isEmpty(options)
			&& options.map(option => (
				<option value={option} key={option}>
					{option}
				</option>
			))}
	</SelectContainer>
);

Select.propTypes = {
	options: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // selected/initial value
	placeholder: PropTypes.string
};

export default Select;
