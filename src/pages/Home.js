import React, { Component } from 'react';
import Main from 'components/Main';
import HeroCarousel from 'components/HeroCarousel';

/* const ImageContainer = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	background-image: url(${imagePath});
	z-index: 1;
`;
 */

export default class Home extends Component {
	render() {
		return (
			<Main>
				<HeroCarousel />
			</Main>
		);
	}
}
