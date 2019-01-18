import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	word-wrap: break-word;
	width: 100%;
	max-width: 1280px;
	margin: 0 auto;
	padding-top: 2rem;
	padding-left: 15px;
	padding-right: 15px;
	padding-bottom: 1rem;
	font-weight: 300;
`;

const Title = styled.div`
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	color: #000;
	font-weight: 400;
`;

const Year = styled.div`
	color: #a1a1a1;
`;

const Medium = styled.div`
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	color: #a1a1a1;
`;

const Dimensions = styled.div`
	color: #a1a1a1;
`;

const Sold = styled.div`
	color: red;
	font-weight: 400;
	min-height: 24px;
	padding-top: 5px;
`;

const ImageModalDetail = ({
 title, year, dimensions, medium, sold
}) => (
	<DetailContainer>
		<Title>{title}</Title>
		<Year>{year}</Year>
		<Dimensions>{dimensions}</Dimensions>
		<Medium>{medium}</Medium>
		<Sold>{sold && 'SOLD'}</Sold>
	</DetailContainer>
);

ImageModalDetail.propTypes = {
	title: PropTypes.string.isRequired,
	year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	dimensions: PropTypes.string.isRequired,
	medium: PropTypes.string.isRequired,
	sold: PropTypes.bool
};

export default ImageModalDetail;
