import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isEmpty } from 'utils/core-util';

const SelectStyles = styled.select`
	width: 100%;
	height: calc(2.25rem + 2px);
	/* padding: 0.375rem 0.75rem; */
	background-color: #0000;
	color: #a1a1a1;
	font-weight: 300;
	letter-spacing: 0.05em;
	border: 1px solid #0000;
	-webkit-appearance: none;
	border-radius: 0px;
	background-image: url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0Jz48cGF0aCBmaWxsPScjNDQ0JyBkPSdNNy40MDYgNy44MjhsNC41OTQgNC41OTQgNC41OTQtNC41OTQgMS40MDYgMS40MDYtNiA2LTYtNnonPjwvcGF0aD48L3N2Zz4=');
	background-position: 9rem 50%;
	background-repeat: no-repeat;
	&:-moz-focusring {
		color: transparent;
		text-shadow: 0 0 0 #000;
	}
`;

const Select = ({ options, onChange, value }) => (
	<SelectStyles value={value} onChange={onChange}>
		{!isEmpty(options)
			&& options.map(option => (
				<option value={option.value} key={option.value}>
					{option.label}
				</option>
			))}
	</SelectStyles>
);

Select.propTypes = {
	options: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) // selected/initial value
};

export default Select;
