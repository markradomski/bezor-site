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
	justify-content: flex-start;
	> button {
		border: none;
		cursor: pointer;
		padding-left: 15px;
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

class GalleryDetail extends Component {
	componentDidMount() {}

	componentWillUnmount() {}

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

	onGoBack() {
		this.props.history.goBack();
	}

	render() {
		const image = this.props.location.state;
		const {
 title, dimensions, medium, sold
} = image;

		if (!image) {
			return null;
		}

		return (
			<ImageModalContainer>
				<Header>
					<button onClick={() => this.onGoBack()}>
						<Svg
							width="22"
							height="22"
							viewBox="0 0 31.494 31.494"
							d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554
	c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587
	c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"
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
		);
	}
}

GalleryDetail.propTypes = {
	image: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default GalleryDetail;
