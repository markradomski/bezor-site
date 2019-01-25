import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Svg, ImageModalDetail } from 'components';
import * as constants from 'data/constants';

const ImageModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	justify-content: space-between;
	position: fixed;
	overflow-y: scroll;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 15;
	background: #fff;
`;

const Header = styled.header`
	display: flex;
	justify-content: flex-end;
	> button {
		border: none;
		cursor: pointer;
		padding-right: 15px;
		padding-top: 1rem;
		padding-bottom: 1rem;
		fill: #000;
		background-color: #fff;
		opacity: 0.6;
		-webkit-transition: all 200ms;
		transition: all 200ms;
		&:hover {
			opacity: 1;
		}
	}
`;

const ImageContainer = styled.div`
	background-position: center center;
	background-repeat: no-repeat;
	background-size: contain;
	height: 75vh;
	width: 100%;
	background-image: url(${props => constants.IMAGE_PATH_1000 + props.image.src});
	opacity: 1;
`;

class Modal extends Component {
	componentDidMount() {
		document.body.classList.add('noscroll');
	}

	componentWillUnmount() {
		document.body.classList.remove('noscroll');
	}

	getYearLabel = image => {
		let yearLabel = '';

		if (image && image.dateCreated && image.dateUpdated) {
			yearLabel = `${image.dateCreated} - ${image.dateUpdated}`;
		}
		if (image && image.dateCreated && !image.dateUpdated) {
			yearLabel = image.dateCreated;
		}

		return yearLabel;
	};

	render() {
		const { onClose, isOpen, image } = this.props;
		const {
 title, dimensions, medium, sold
} = image;

		return (
			isOpen && (
				<ImageModalContainer>
					<Header>
						<button onClick={onClose}>
							<Svg
								width="22"
								height="22"
								viewBox="0 0 512 512"
								d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4 L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1 c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1 c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"
							/>
						</button>
					</Header>
					<ImageContainer image={image} />
					<ImageModalDetail
						title={title}
						year={this.getYearLabel(image)}
						dimensions={dimensions}
						medium={medium}
						sold={sold}
					/>
				</ImageModalContainer>
			)
		);
	}
}

const ImageModal = ({
 onClose, currentImage, isOpen, image
}) => isOpen && (
		<Modal
			onClose={onClose}
			currentImage={currentImage}
			isOpen={isOpen}
			image={image}
		/>
	);

ImageModal.propTypes = {
	onClose: PropTypes.func.isRequired,
	currentImage: PropTypes.number,
	isOpen: PropTypes.bool.isRequired,
	image: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default ImageModal;
