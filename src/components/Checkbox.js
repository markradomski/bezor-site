import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styled = styled.div`
	input {
		display: none;

		+ label {
			outline: 0;
			display: block;
			margin-bottom: 0 !important;
			width: 2.7em;
			height: 1.5em;
			position: relative;
			cursor: pointer;
			user-select: none;
			&:after,
			&:before {
				position: relative;
				display: block;
				content: '';
				width: 50%;
				height: 100%;
			}
			&:after {
				left: 0;
			}
			&:before {
				display: none;
			}
		}
		&:checked + label:after {
			left: 50%;
		}
	}

	input {
		+ label {
			padding: 2px;
			transition: all 0.2s ease;
			background: #fff;
			border: 1px solid #ced4da;
			border-radius: 2em;
			&:after {
				transition: all 0.2s ease;
				background: #ced4da;
				content: '';
				border-radius: 1em;
			}
		}

		&:checked + label {
			border: 1px solid #00e7b3;
			&:after {
				left: 50%;
				background: #00e7b3;
			}
		}
	}
`;

const Checkbox = ({ value, onChange }) => (
	<Styled>
		<input id="ios" type="checkbox" onChange={onChange} checked={value} />
		<label htmlFor="ios" />
	</Styled>
);

Checkbox.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.bool
};

export default Checkbox;
