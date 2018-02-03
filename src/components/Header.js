import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="wrapper">
					<div className="logo-section">
						<Link to="/">
							<img
								src="http://localhost:8888/wp-content/uploads/2018/02/whitelogo.png"
								alt="Wavey Media Group"
								className="img-responsive white"
							/>
							<img
								src="http://localhost:8888/wp-content/uploads/2018/01/logo-1.png"
								alt="Wavey Media Group"
								className="img-responsive dark"
							/>
						</Link>
					</div>
					<div className="link-section">
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/work">Work</Link>
							</li>
						</ul>
					</div>
				</div>
			</header>
		);
	}
}
