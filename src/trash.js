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
	"https://image.flaticon.com/icons/svg/413/413823.svg",
	"https://image.flaticon.com/icons/svg/413/413814.svg",
	"https://image.flaticon.com/icons/svg/413/413815.svg",
	"https://image.flaticon.com/icons/svg/413/413842.svg",
	"https://image.flaticon.com/icons/svg/413/413832.svg",
	"https://image.flaticon.com/icons/svg/413/413811.svg",
	"https://image.flaticon.com/icons/svg/413/413809.svg",
	"https://image.flaticon.com/icons/svg/413/413835.svg",
	"https://image.flaticon.com/icons/svg/413/413844.svg",
	"https://image.flaticon.com/icons/svg/413/413807.svg",
	"https://image.flaticon.com/icons/svg/413/413808.svg",
	"https://image.flaticon.com/icons/svg/413/413852.svg",
	"https://image.flaticon.com/icons/svg/413/413836.svg",
];

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: "#fcfcfc",
			anim: false,
			form: false,
			img: "",
			intervalId: ""
		};
	}

	loop = () => {
		for (let i = 0; i < urls.length; i++) {
			let img = urls[i];
			setTimeout(() => this.setState({ img }), i * 1200); 
		}
	};

	svg = e => {
		this.setState({ form: true, anim: true });
		this.loop();
		var intervalId = setInterval(() => this.loop(), urls.length * 1200);
		this.setState({ intervalId: intervalId });
	};

	ok = e => {
		this.setState({ anim: false, form: false });
		clearInterval(this.state.intervalId);
		console.log('interval')		
	};

	handleChange = e => {
		this.setState({ anim: true });
	};

	handleSubmit = e => {
		this.setState({ anim: false });
	};

	componentDidMount() {
		this.svg();
	}
	render() {
		return (
			<div className="container">
				<Divider hidden />

				{!this.state.form ? (
					<div>
						<h1 style={{ color: this.state.color, fontSize: 28 }}>
							Share some stories, strategies, or product
							milestones.
						</h1>
						<h6 style={{ color: '#b3cce6' }}>
							Reach tens of thousands of entrepreneurs who are
							eager to learn from your experiences.
						</h6>
					</div>
				) : null}

				<Divider hidden />

				{!this.state.form ? (
					<div className="updater" onClick={this.svg}>
						<svg
							className="svgUpdate"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z" />
						</svg>
					</div>
				) : null}

				<Divider hidden />

				{this.state.form ? (
					<InfiniteLoop />
				) : null}

				{this.state.form ? (
					<div>
						<Divider hidden />
						<Form 
							size="large"
						>
							<Form.Field
								style={{
									backgroundColor: "transparent"
								}}
							>
								<Input
									placeholder="Enter Title"
									type="text"
									name="name"
								/>
								<Divider hidden />
								<Input
									placeholder="What happend?"
									type="text"
									name="name"
								/>
								<Divider hidden />
								<Input
									placeholder="You can also paste a link."
									type="text"
									name="name"
								/>
							</Form.Field>
							<Divider hidden />
							<Divider hidden />
							<Button
								circular
								color="linkedin"
								icon="check"
								onClick={this.ok}
							/>
							<Button
								circular
								onClick={this.ok}
								color="google plus"
								style={{ marginLeft: "5vh" }}
								icon="cancel"
							/>
						</Form>
					</div>
				) : null}

			</div>
		);
	}
}
export default App;

