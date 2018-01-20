import React, { Component } from 'react';

export default class WorkGrid extends Component {
	constructor() {
		super();

		this.state = {
			portfolios: []
		};
	}

	componentDidMount() {
		fetch('http://localhost:8888/wp-json/wp/v2/portfolio?_embed')
			.then(data => data.json())
			.then(data => {
				this.setState({
					portfolios: data
				});
			});
	}
	render() {
		const portfolios = this.state.portfolios.map(portfolio => {
			const imageCheck = () => {
				if (portfolio.better_featured_image) {
					return (
						<div
							className="portfolioBox"
							style={{
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'contain',
								backgroundPosition: 'center',
								backgroundImage: `url(${
									portfolio.better_featured_image.source_url
								})`
							}}
						>
							<div className="portfolioOverlay">
								<span className="portfolioContent">
									<h5>Ttitle</h5>
									<p>caption</p>
									<button className="btn btn-blue">Learn More</button>
								</span>
							</div>
							<div className="work__title">
								<h1>{portfolio.title.rendered}</h1>
							</div>
						</div>
					);
				} else {
					<div
						className="portfolioBox"
						style={{
							backgroundRepeat: 'no - repeat',
							backgroundSize: 'contain',
							backgroundPosition: 'center',
							background: 'green'
						}}
					>
						<div className="work__title">
							<h1>{portfolio.title.rendered}</h1>
						</div>
					</div>;
				}
			};
			return <div className="work__wrap">{imageCheck()}</div>;
		});

		return (
			<div>
				<h1>Work Grid</h1>
				{portfolios}
			</div>
		);
	}
}
