import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputContainer = styled.input`
	width: 100%;
	height: calc(2.25rem + 2px);
	padding: 0.375rem 0rem;
	background-color: #0000;
	/* border: 1px solid #ced4da; */
	border-radius: 0rem;
	border: 0;
	outline: 0;
	background: transparent;
	border-bottom: 1px solid #000;
	color: #a1a1a1;
	font-weight: 300;
	letter-spacing: 0.05em;
	&::placeholder {
		color: #a1a1a1;
		font-weight: 300;
	}
	&::-webkit-input-placeholder {
		color: #a1a1a1;
		font-weight: 300;
	}
	&::-moz-placeholder {
		color: #a1a1a1;
		font-weight: 300;
	}
	&:focus::-webkit-input-placeholder {
		color: transparent;
	}
	&:focus::-moz-placeholder {
		color: transparent;
	}
`;

const Input = ({
 value, onChange, onKeyDown, placeholder
}) => (
	<InputContainer
		type="text"
		onChange={onChange}
		onKeyDown={onKeyDown}
		value={value}
		placeholder={placeholder}
	/>
);

Input.propTypes = {
	onKeyDown: PropTypes.func,
	onChange: PropTypes.func,
	value: PropTypes.string,
	placeholder: PropTypes.string
};

export default Input;
