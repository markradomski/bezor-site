import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainContainer = styled.div`
	flex: 1;
`;

const MainHeading = styled.h3`
	margin-bottom: 2rem;
	width: fit-content;
`;

const Main = props => (
	<MainContainer>
		<MainHeading>{props.heading}</MainHeading>
		{props.children}
	</MainContainer>
);

Main.propTypes = {
	heading: PropTypes.string
};

export default Main;
