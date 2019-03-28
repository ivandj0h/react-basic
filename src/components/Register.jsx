import React, { Component } from 'react';

class Register extends Component {


	setAction() {
		let changeHandler = this.props.changeHandler;
		changeHandler({
			cancel: {
				text: "Batal"
			},
			submit: {
				text: "Register"
			}
		});
	}

	render() {
		return (
			<form className={this.props.show?'show':'hide'}>
				<h1>Registration</h1>
				<div>
					<input type="text" placeholder="Enter username ..." />
				</div>
				<div>
					<input type="text" placeholder="Enter email address ..." />
				</div>
				<div>
					<input type="password" placeholder="Enter password ..." />
				</div>
			</form>
		);
	}

}

export default Register;