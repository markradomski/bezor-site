import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
 Home, About, Artworks, Contact, Biography, GalleryDetail
} from 'pages';
import { ScrollToTop, Header, Footer } from 'components';
import config from 'data/siteConfig';
import { GlobalStyle, PageContainer } from 'theme/GlobalStyle';

const history = createBrowserHistory();

class App extends Component {
	render() {
		return (
			<Router history={history}>
				<ScrollToTop>
					<GlobalStyle />
					<PageContainer>
						<Header siteTitle={config.siteTitle} />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/artworks" component={Artworks} />
							<Route path="/gallery" component={GalleryDetail} />
							<Route path="/biography" component={Biography} />
							<Route path="/about" component={About} />
							<Route path="/contact" component={Contact} />
						</Switch>
						<Footer contact={config.contact} />
					</PageContainer>
				</ScrollToTop>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
