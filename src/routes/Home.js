import React from "react";
import fire from '../Fire';
import { Button, Container, Header } from 'semantic-ui-react'

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			title: '',
			description: '',
			picture: '',
			list: [],
			keys: [],
			show: false
		};
	}
	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	logout = () => {
		fire.auth().signOut();
	};

	show = () => {
		this.setState({ show: !this.state.show });
	};

	new = e => {
		this.setState({ loading: true });
		e.preventDefault();
		let title = this.state.title;
		let description = this.state.description;
		let picture = this.state.picture;
		const { currentUser } = fire.auth();
		fire
			.database()
			.ref(`feed/`)
			.push({ title, description, picture, user: currentUser.email })
			.then(() => {
				this.setState({ loading: false, show: false });
			});
	};

	componentDidMount = () => {
		this.setState({ loading: true });
		const { currentUser } = fire.auth();
		fire
			.database()
			.ref(`/feed/`)
			.on('value', snapshot => {
				var obj = snapshot.val();
				var list = [];
				var keys = [];
				for (let a in obj) {
					list.push(obj[a]);
					keys.push(a);
				}
				this.setState({
					list: list,
					keys: keys,
					loading: false
				});
			});
	};

	render() {
		const listItems = this.state.list.map((item, index) => (
        <p>{item.title}</p>
		));

		return (
			<div>
				{this.state.show ? (
					<div className="mb-3">
						<input
							value={this.state.title}
							onChange={this.handleChange}
							name="title"
							class="form-control mb-2"
							placeholder="Title"
							required
						/>
						<input
							value={this.state.picture}
							onChange={this.handleChange}
							name="picture"
							class="form-control mb-2"
							placeholder="Picture URL"
							required
						/>
						<textarea
							row="9"
							value={this.state.description}
							onChange={this.handleChange}
							name="description"
							class="form-control mb-2"
							placeholder="Description"
							required
						/>
					</div>
				) : null}


        {listItems}


			</div>
		);
	}
}

export default Home;
