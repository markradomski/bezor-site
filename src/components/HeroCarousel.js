import React, { Component } from 'react';
import styled from 'styled-components';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { slideshow } from 'data/siteConfig';
import { isEmpty } from 'utils/core-util';

const slideshowPath = `${process.env.PUBLIC_URL}/assets/img/slideshow/`;

const CarouselStyles = styled.div`
	display: flex;
	justify-content: center;
	.carousel {
		max-width: 800px;
		background-color: #eeeef1;
	}
`;

class HeroCarousel extends Component {
	render() {
		return (
			<CarouselStyles>
				<Carousel
					showThumbs={false}
					showStatus={false}
					infiniteLoop={true}
					autoPlay={true}
				>
					{!isEmpty(slideshow)
						&& slideshow.map((image, i) => (
							<div key={i}>
								<img src={slideshowPath + image} />
							</div>
						))}
				</Carousel>
			</CarouselStyles>
		);
	}
}

export default HeroCarousel;
