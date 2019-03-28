import React, { Component } from 'react';

class Contact extends Component {


	setAction() {
		let changeHandler = this.props.changeHandler;
		changeHandler({
			cancel: {
				text: "Batal"
			},
			submit: {
				text: "Send Message"
			}
		});
	}

	render() {
		return (
			<form className={this.props.show?'show':'hide'}>
				<h1>Contact</h1>
				<div>
					<input type="text" placeholder="Enter username ..." />
				</div>
				<div>
					<input type="text" placeholder="Enter email address ..." />
				</div>
				<div>
					<textarea  className="message-textarea">Your message here</textarea>
				</div>
			</form>
		);
	}

}

export default Contact;