import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeAnimation = keyframes`${fadeIn}`;

const FadeDiv = styled.div`
	animation: 1s ${fadeAnimation};
`;

export default class WorkGrid extends Component {
	constructor() {
		super();

		this.state = {
			portfolios: [],
			loaded: false
		};
	}

	componentDidMount = () => {
		fetch('http://localhost:8888/wp-json/wp/v2/portfolio?_embed')
			.then(data => data.json())
			.then(data => {
				console.log(data);
				this.setState({
					portfolios: data
				});
			});
	};

	render() {
		// Map Portfolios
		const portfolios = this.state.portfolios.map(portfolio => {
			// Check if the item is flipped on the grid
			const isFlipped = () =>
				portfolio.acf.flipped ? 'work__info flipped' : 'work__info';

			console.log(isFlipped());

			const imageCheck = () => {
				if (portfolio.better_featured_image) {
					return (
						<div
							className="portfolioBox"
							style={{
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								backgroundImage: `url(${
									portfolio.better_featured_image.source_url
								})`
							}}
						>
							<div
								className={isFlipped()}
								style={{ background: portfolio.acf.panel_background_color }}
							>
								<div className="inner-wrap">
									<img
										src={portfolio.acf.logo}
										alt=""
										className="img-responsive"
									/>
									<p style={{ color: portfolio.acf.panel_text_color }}>
										<strong>Date Completed:</strong> 1/20/2018
									</p>

									<p style={{ color: portfolio.acf.panel_text_color }}>
										<strong>Technologies:</strong> Shopify, Liquid, SCSS
									</p>
									<p
										style={{ color: portfolio.acf.panel_text_color }}
										className="description"
									>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Consequatur magnam eum nulla veniam tempore. Illum, odio,
										dignissimos ab quaerat perferendis sed, ullam possimus ipsum
										officia provident corporis qui optio ipsam!
									</p>

									<div className="btn-wrap">
										<button href="#" className="btn btn-black">
											Visit
										</button>
									</div>
								</div>
							</div>
							{/* <div className="portfolioOverlay">
								<span className="portfolioContent">
									<div className="work__title">
										<h1>{portfolio.title.rendered}</h1>
									</div>
								</span>
							</div> */}
						</div>
					);
				}
			};
			return (
				<FadeDiv>
					<div className="work__wrap">
						{imageCheck()}
						<div className="extra-info">
							<div className="left">January 2018</div>
							<div className="right">design, code, reskin</div>
						</div>
					</div>
				</FadeDiv>
			);
		});

		return (
			<div className="work__grid">
				<div className="wide-wrapper">{portfolios}</div>
			</div>
		);
	}
}
