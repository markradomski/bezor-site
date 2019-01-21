import React, { Component } from 'react';
import styled from 'styled-components';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

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
	getSlideShowImages = () => {
		const items = [];
		for (let i = 1; i < 13; i++) {
			const src = `${slideshowPath + i}.jpg`;
			items.push(
				<div key={i}>
					<img src={src} />
				</div>
			);
		}
		return items;
	};

	render() {
		return (
			<CarouselStyles>
				<Carousel
					showThumbs={false}
					showStatus={false}
					infiniteLoop={true}
					autoPlay={true}
				>
					{this.getSlideShowImages()}
				</Carousel>
			</CarouselStyles>
		);
	}
}

export default HeroCarousel;
