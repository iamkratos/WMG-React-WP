import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
	componentDidMount() {
		window.addEventListener('scroll', this.headerColorChange);
	}

	headerColorChange() {
		if (window.scrollY > 0) {
			document.body.classList.add('sticky');
			document.querySelector('.white').style.display = 'none';
			document.querySelector('.dark').style.display = 'block';
		} else {
			document.body.classList.remove('sticky');
			document.querySelector('.white').style.display = 'block';
			document.querySelector('.dark').style.display = 'none';
		}
	}

	render() {
		return (
			<footer className="footer">
				<div className="wrapper">
					<p>&copy; 2018 Wavey Media Group, LLC. All rights reserved.</p>
				</div>
			</footer>
		);
	}
}
