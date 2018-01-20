import React, { Component } from 'react';

import WorkGrid from './WorkGrid';

import logo from '../logo.svg';
import '../App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Wavey Media Group</h1>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<WorkGrid />
			</div>
		);
	}
}

export default App;
