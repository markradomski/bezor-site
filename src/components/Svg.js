import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SvgIcon = styled.svg`
	xmlns:http://www.w3.org/2000/svg;
/* 	width: props.width;
	height: props.height;
	viewBox: props.viewBox; */
`;

const Svg = ({
 width, height, viewBox, d
}) => (
	<SvgIcon width={width} height={height} viewBox={viewBox}>
		<path d={d} />
	</SvgIcon>
);

Svg.propTypes = {
	width: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
	viewBox: PropTypes.string.isRequired,
	d: PropTypes.string.isRequired
};

export default Svg;
