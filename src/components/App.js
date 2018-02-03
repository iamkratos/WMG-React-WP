import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WorkGrid from './WorkGrid';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

import '../App.scss';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pageLoaded: false
		};
	}

	componentDidMount() {
		document.body.scrollTop = 0;
		console.log('app ran');
	}

	render() {
		return (
			<div className="App">
				<Router onUpdate={() => window.scrollTo(0, 0)}>
					<div>
						<Header />
						<div className="page-wrap">
							<Switch>
								<Route
									exact
									path="/"
									render={props => (
										<Home {...props} pass_to_page_content="hi" />
									)}
								/>
								<Route exact path="/work" component={WorkGrid} />
							</Switch>
						</div>
						<Footer />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
