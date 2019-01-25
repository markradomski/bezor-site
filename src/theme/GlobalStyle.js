import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
	box-sizing: border-box;
		height:100%; 
		color: #000;
			overflow-y: scroll;

} 
*, *:before, *:after {
	 box-sizing: inherit
}


  body {
		font-family: 'Roboto', sans-serif;
		font-size: 16px;
		font-weight: 400;
		letter-spacing: 0.05em;
		line-height: 1.75;
		background: #fafafa;
		 min-height:100%; 
		 padding:0; 
		 margin:0;
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: 'Zilla Slab', serif;
		font-weight: 400;
	}

	p {
		margin: 0;
		padding: 0;
	}

	a {
		text-decoration: none !important;
		color: #000;
		&:hover {
			color: inherit;
		}
	}
	
  /* remove dotted line around links in Firefox */
  a:active, a:focus {
    outline: 0;
    border: none;
    -moz-outline-style: none
  }
  :focus {
    outline:none;
  }
  ::-moz-focus-inner {
    border:0;
	}
	
	ul {
		list-style: none;
		padding:0;
		margin:0;
	}

	button:focus {
		outline: none;
	}

 // classes 

	td.duration {
		width: 7rem
	};

	.noscroll {
		overflow: hidden;
	}
`;

/* 		Custom components 		*/

export const PageContainer = styled.div`
	max-width: 1280px;
	min-height: 100vh;
	margin: 0 auto;
	padding-left: 15px;
	padding-right: 15px;
	display: flex;
	flex-direction: column;
	/* causes .row to not expand to 100% ?? */
	/* display: flex;
	justify-content: center;
	align-items: center; */
`;

export const NoResultsFound = styled.p`
	padding-right: 15px;
	padding-left: 15px;
	margin-top: 1rem;
`;
