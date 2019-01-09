import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Menu } from 'components';

const HeaderContainer = styled.header`
	width: 100%;
	margin-bottom: 2rem;
	/* z-index: 1; */
`;

const Navigation = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: nowrap;
	padding-top: 1rem;
	padding-bottom: 1rem;
`;

const MenuButton = styled.button`
	position: fixed;
	top: 15px;
	right: 15px;
	border: none;
	background: ${props => (props.open ? 'none' : '#00e7b3')};
	width: 50px;
	height: 50px;
	border-radius: 50%;
	padding: 10px;
	transition: all 0.2s ease;
	cursor: pointer;
	transform: ${props => (props.open ? 'rotate(0)' : 'rotate(45deg)')};
	z-index: 12;
`;

const IconSvg = styled.svg`
	display: block;
	width: 1.25em;
	height: 1.25em;
	margin: 0 auto;
	fill: #f4f4f4;
	> path {
		d: ${props => props.d};
	}
`;

const BrandLink = styled(Link)`
	font-family: 'Oleo Script', serif;
	font-size: 2rem;
	font-weight: 300;
	line-height: 1.35;
	color: ${props => (props.inverse ? '#fff' : '#000')}; // TODO add brand colors to GlobalStyle
`;

class Header extends Component {
	state = {
		open: false
	};

	toggle = () => {
		this.setState(prevState => ({
			open: !prevState.open
		}));
	};

	render() {
		const { siteTitle } = this.props;
		const { open } = this.state;

		return (
			<Fragment>
				<HeaderContainer>
					<Navigation>
						<BrandLink to="/">{siteTitle}</BrandLink>
						<MenuButton onClick={this.toggle} open={open}>
							<IconSvg width="100%" height="100%" viewBox="0 0 10.2 10.2">
								<path d="M 5.8 5.1 l 4.4 4.4 l -0.7 0.7 L 5.1 5.8 l -4.4 4.4 L 0 9.5 l 4.4 -4.4 L 0 0.7 L 0.7 0 l 4.4 4.4 L 9.5 0 l 0.7 0.7 L 5.8 5.1 Z" />
							</IconSvg>
						</MenuButton>
					</Navigation>
				</HeaderContainer>
				<Menu onToggle={this.toggle} open={open} />
			</Fragment>
		);
	}
}

Header.propTypes = {
	siteTitle: PropTypes.string.isRequired
};

export default Header;
