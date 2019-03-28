import React, { Component } from 'react';

class Login extends Component {


	setAction() {
		let changeHandler = this.props.changeHandler;
		changeHandler({
			cancel: {
				text: "Batal"
			},
			submit: {
				text: "Login"
			}
		});
	}

	render() {
		return (
			<form className={this.props.show?'show':'hide'}>
				<h1>Login</h1>
				<div>
					<input type="text" placeholder="Enter username ..." />
				</div>
				<div>
					<input type="password" placeholder="Enter password ..." />
				</div>
			</form>
		);
	}

}

export default Login;