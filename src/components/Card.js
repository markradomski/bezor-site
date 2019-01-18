import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	word-wrap: break-word;
	min-width: 0;
	background-color: #fff;
	background-clip: border-box;
	border: 1px solid #00000020;
	margin-bottom: 10px;
`;

const Image = styled.img`
	width: 100%;
	vertical-align: middle;
	background-color: #eeeef1;
	height: auto;
	::before {
		content: '';
		display: block;
		width: 100%;
		height: 0;
		padding-bottom: 100%;
	}
`;

const DetailsWrapper = styled.div`
	padding-top: 25px;
	padding-bottom: 10px;
	padding-left: 5px;
	padding-right: 5px;
`;

const Title = styled.div`
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	font-weight: 400;
`;

const Year = styled.div`
	color: #a1a1a1;
`;

const Card = ({ src, title, year }) => (
	<CardContainer>
		<Image src={src} />
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
