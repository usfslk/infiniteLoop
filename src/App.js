import React, { Component } from "react";
import {
	Form,
	Input,
	Divider,
	Button
} from "semantic-ui-react";
import InfiniteLoop from './InfiniteLoop';

const urls = [
	"https://image.flaticon.com/icons/svg/413/413850.svg",
	"https://image.flaticon.com/icons/svg/413/413826.svg",
	"https://image.flaticon.com/icons/svg/413/413808.svg",
	"https://image.flaticon.com/icons/svg/413/413853.svg",
	"https://image.flaticon.com/icons/svg/413/413835.svg",
	"https://image.flaticon.com/icons/svg/413/413844.svg",
	"https://image.flaticon.com/icons/svg/413/413807.svg",
	"https://image.flaticon.com/icons/svg/413/413808.svg",
	"https://image.flaticon.com/icons/svg/413/413852.svg",
	"https://image.flaticon.com/icons/svg/413/413823.svg",
	"https://image.flaticon.com/icons/svg/413/413814.svg",
	"https://image.flaticon.com/icons/svg/413/413815.svg",
	"https://image.flaticon.com/icons/svg/413/413842.svg",
	"https://image.flaticon.com/icons/svg/413/413832.svg",
	"https://image.flaticon.com/icons/svg/413/413811.svg",
	"https://image.flaticon.com/icons/svg/413/413809.svg",
	"https://image.flaticon.com/icons/svg/413/413836.svg",
];

const bg = ["http://samherbert.net/svg-loaders/svg-loaders/puff.svg"];

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: '#fcfcfc',
			anim:true,
			form:false
		};
	}

	handleSubmit = e => {
		this.setState({ form: false });
	};

	ok = e => {
		this.setState({ form: false });
	};

	svg = e => {
		this.setState({ form: true });
	};

	render() {
		return (
			<div className="container">
				<Divider hidden />

				{!this.state.form ? (
					<div>

						<h1 style={{ color: this.state.color}}>
							InfiniteLoop.
						</h1>
						
						<h3 style={{ color: this.state.color }}>
						Easily make and manage React animation loops
						</h3>
						


						<h6 style={{ color: '#b3cce6' }}>
						Dynamic looping of React animations.
						Define an animaton with urls, specify a duration, and the animation will repeat for that infinite iterations. 
						You can not change the number of iterations programmatically.
						</h6>
						<Divider hidden />

						<InfiniteLoop data={urls} background={bg} duration={3000} size={75} />

						<h3 style={{ color: this.state.color }}>
						Installation
						</h3>
						<img src="https://i.imgur.com/ln0MRWZ.png" alt="" style={{maxHeight: 100}} />
				
						<h3 style={{ color: this.state.color}}>
						Sample usage
						</h3>
						<h6 style={{ color: '#b3cce6' }}>
						Initial style for animated element, used for ReactMotion's defaultStyle and as returning animation.
						Currently is being developed and tested with the latest stable Node 7 on OSX. 
						To run example covering all ReactMotionLoop features, use npm start dev, which will compile src/example/Example.js
						</h6>

					</div>
				) : null}

				<Divider hidden />

				{this.state.form ? (
					<div className="updater" onClick={this.svg}>
						<svg
							className="svgUpdate"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z" />
						</svg>
					</div>
				) : null}



				

			</div>
		);
	}
}
export default App;

