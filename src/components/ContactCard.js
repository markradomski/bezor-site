import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 3rem;
	font-weight: 300;
`;

const Title = styled.h5`
	margin-bottom: 1rem;
`;

const Extra = styled.p`
	font-size: 14px;
	min-height: 21px;
	margin-top: 0.5rem;
	margin-bottom: 1rem;
	font-weight: 400;
`;

const Street = styled.p`
	color: #a1a1a1;
`;

const Suburb = styled.p`
	color: #a1a1a1;
`;

const Info = styled.p`
	font-size: 14px;
	min-height: 21px;
	margin-top: 0.5rem;
	margin-bottom: 1.5rem;
`;

const Name = styled.p`
	color: #a1a1a1;
`;

const Email = styled.a.attrs({
	target: '_blank',
	rel: 'noopener',
})``;

const Phone = styled.p``;

const StyledLink = styled.a.attrs({
	target: '_blank',
	rel: 'noopener',
})`
	font-weight: 400;
`;

const ContactCard = ({ title, extra, street, suburb, info, link, name, email, phone }) => (
	<ContactContainer>
		{title && <Title>{title}</Title>}
		{street && <Street>{street}</Street>}
		{suburb && <Suburb>{suburb}</Suburb>}
		{!email && <Info>{info}</Info>}
		{link && <StyledLink href={link}>> website</StyledLink>}
		{name && <Name>{name}</Name>}
		{extra && <Extra>{extra}</Extra>}
		{email && <Email href={`mailto:${email}`}>{email}</Email>}
		{phone && <Phone>{phone}</Phone>}
	</ContactContainer>
);

export default ContactCard;
