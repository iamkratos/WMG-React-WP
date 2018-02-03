import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { Link } from 'react-router-dom';

const fadeAnimation = keyframes`${fadeIn}`;

const FadeDiv = styled.div`
	animation: 1s ${fadeAnimation};
`;

const BlackButton = styled.button`
	color: #fff;
	background: #000;
	padding: 10px 20px;
	font-size: 24px;

	a {
		color: #fff;
		text-decoration: none;
	}

	&:hover {
		background: #fff;
		a {
			color: #000;
		}
	}
`;

export default class Home extends Component {
	componentDidMount() {
		document.body.classList.add('froze');
		window.scrollTo(0, 0);
	}

	componentWillUnmount() {
		document.body.classList.remove('froze');
	}
	render() {
		return (
			<FadeDiv>
				<div className="home-page">
					<div className="banner">
						<h1>
							Create <span>&#x000B7;</span> Execute <span>&#x000B7;</span>{' '}
							Deploy
						</h1>
						<p>We create beautiful digital experiences</p>
						<div className="btn-wrap">
							<BlackButton>
								<Link to="/work">Our Work</Link>
							</BlackButton>
						</div>
					</div>
				</div>
			</FadeDiv>
		);
	}
}
