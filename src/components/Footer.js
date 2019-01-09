import React from 'react';
import styled from 'styled-components';
import { Svg } from 'components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
	display: flex;
	justify-content: flex-end;
	padding-left: 2rem;
	padding-right: 2rem;
	padding-top: 3rem;
	padding-bottom: 3rem;
	border-top: 1px solid #e2e0e0;
	margin-top: 3rem;
	margin-bottom: 1rem;
`;

const LinkContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 100%;
`;

const PageLink = styled.div`
	margin-bottom: 1rem;
	text-align: center;
`;

const SocialLink = styled.a.attrs({
	target: '_blank',
	rel: 'noopener'
})``;

const Footer = () => (
	<FooterContainer>
		<LinkContainer>
			<PageLink className="col-6 col-sm-2">
				<Link to="/">home</Link>
			</PageLink>
			<PageLink className="col-6 col-sm-2">
				<Link to="/artworks">artworks</Link>
			</PageLink>
			<PageLink className="col-6 col-sm-2">
				<Link to="/biography">biography</Link>
			</PageLink>
			<PageLink className="col-6 col-sm-2">
				<Link to="/about">about</Link>
			</PageLink>
			<PageLink className="col-6 col-sm-2">
				<Link to="/contact">contact</Link>
			</PageLink>
			<PageLink className="col-6 col-sm-1">
				<SocialLink href={'https://www.instagram.com/annettebezor'}>
					<Svg
						width="20"
						height="20"
						viewBox="0 0 64 64"
						d="M58 0H6C2.69 0 0 2.69 0 6v52c0 3.31 2.69 6 6 6h52c3.31 0 6-2.69 6-6V6c0-3.31-2.69-6-6-6zM43.75 9.785c0-2.2 1.8-4 4-4h5c2.2 0 4 1.8 4 4v6.057c0 2.2-1.8 4-4 4h-5c-2.2 0-4-1.8-4-4V9.785zM32 17.89c7.78 0 14.11 6.33 14.11 14.11S39.78 46.11 32 46.11 17.89 39.78 17.89 32 24.22 17.89 32 17.89zM58 60H6c-1.103 0-2-.896-2-2V27.14h10.584c-.435 1.552-.693 3.175-.693 4.86 0 9.986 8.125 18.11 18.11 18.11S50.11 41.985 50.11 32c0-1.686-.26-3.31-.694-4.86H60V58c0 1.104-.897 2-2 2z"
					/>
				</SocialLink>
			</PageLink>
		</LinkContainer>
	</FooterContainer>
);

export default Footer;
