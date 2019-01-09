import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuContainer = styled.div`
	position: fixed;
	height: 100%;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	background: ${props => (props.open ? '#3e4846' : 'transparent')};
	padding: 7em 3em;
	opacity: ${props => (props.open ? 1.0 : 0)};
	transition: 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86) all;
	z-index: ${props => (props.open ? 10 : -1)};
	& ul {
		text-align: center;
		transform: ${props => (props.open ? 'translateY(0)' : ' translateY(3em)')};
		transition: 0.5s ease all;
		> li {
			padding-top: 1rem;
			padding-bottom: 1rem;
		}
		> li a {
			color: #fff;
			vertical-align: middle;
		}
	}
`;

const Menu = props => {
	const { open, onToggle } = props;
	return (
		<MenuContainer open={open}>
			<ul>
				<li>
					<Link to="/" onClick={onToggle}>
						<h1>home</h1>
					</Link>
				</li>
				<li>
					<Link to="/artworks" onClick={onToggle}>
						<h1>artworks</h1>
					</Link>
				</li>
				<li>
					<Link to="/biography" onClick={onToggle}>
						<h1>biography</h1>
					</Link>
				</li>
				<li>
					<Link to="/about" onClick={onToggle}>
						<h1>about</h1>
					</Link>
				</li>
				<li>
					<Link to="/contact" onClick={onToggle}>
						<h1>contact</h1>
					</Link>
				</li>
			</ul>
		</MenuContainer>
	);
};

Menu.propTypes = {
	open: PropTypes.bool.isRequired,
	onToggle: PropTypes.func.isRequired
};

export default Menu;
