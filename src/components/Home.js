import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { Link } from 'react-router-dom';

const fadeAnimation = keyframes`${fadeIn}`;

const FadeDiv = styled.div`
	animation: 1s ${fadeAnimation};
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
							<button className="btn btn-black">
								<Link to="/work">Our Work</Link>
							</button>
						</div>
					</div>
				</div>
			</FadeDiv>
		);
	}
}
