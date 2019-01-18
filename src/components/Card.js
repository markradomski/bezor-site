import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	word-wrap: break-word;
	min-width: 0;
	/* background-color: #fff; */
	background-clip: border-box;
	/* border: 1px solid #00000020; */
	margin-bottom: 10px;
`;

const Overlay = styled.div`
	display: flex;
	flex-direction: column-count;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.6);
	transition: all 0.4s ease-out;
	visibility: hidden;
	opacity: 0;
	${CardContainer}:hover & {
		opacity: 1;
		visibility: visible;
	}
	.sold {
		color: #fff;
  font-size: 20px;
  letter-spacing: 0.2em;
}
	}
`;

const ImageContainer = styled.div`
	position: relative;
	background-color: #eeeef1;
	display: block;
	overflow: hidden;
	padding-bottom: 100%;
`;

const Image = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	object-fit: cover;
`;

const DetailsWrapper = styled.div`
	padding-top: 15px;
	padding-bottom: 10px;
	font-weight: 400;
`;

const Title = styled.div`
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
`;

const Year = styled.div`
	color: #a1a1a1;
	font-weight: 300;
`;

const Card = ({
 src, title, year, sold
}) => (
	<CardContainer>
		<ImageContainer>
			<Image src={src} />
			<Overlay>{sold && <div className="sold">SOLD</div>}</Overlay>
		</ImageContainer>
		<DetailsWrapper>
			<Title>{title}</Title>
			<Year>{year}</Year>
		</DetailsWrapper>
	</CardContainer>
);

Card.propTypes = {
	src: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

export default Card;
