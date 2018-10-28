import React, { Component } from "react";
import {
	Divider,
} from "semantic-ui-react";
import InfiniteLoop from 'infinite-loop-animation';

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

						<Divider hidden />
						
						<h3 style={{ color: this.state.color }}>
						Easily make and manage React animation loops
						</h3>
						
						<h6 style={{ color: '#b3cce6' }}>
						Dynamic looping of image animations in React.
						Define an animaton with urls or paths, specify a duration, and the animation will repeat for that infinite iterations. 
						You can not change the number of iterations programmatically.
						</h6>

						<Divider hidden />

						<InfiniteLoop data={urls} background={bg} duration={800} size={65} />

						<Divider hidden />

						<div style={{ color: this.state.color }}>
						<h3>
						Installation
						</h3>

						<pre><code style={{ color: 'rgb(179, 204, 230)' }}>
						npm i infinite-loop-animation
						</code></pre>

						<h3 >
						Sample usage
						</h3>
						</div>

						<Divider hidden />	

						<img src="https://i.imgur.com/UOCEBoT.png" alt="" style={{maxHeight: 500}} />

						<Divider hidden />

						  <h3 style={{ color: this.state.color }}>
							Properties
							</h3>

						<div style={{ color: 'rgb(179, 204, 230)' }}>
							<b>data</b>
							<p>An array of images</p>
							<b>background</b>
							<p>Background image path or url</p>
							<b>duration</b>
							<p>Time between each frame in milliseconds</p>
							<b>size</b>
							<p>Recommended values between 25 and 250</p>
						</div>


					</div>
				) : null}

				<Divider hidden />		

			</div>
		);
	}
}
export default App;

