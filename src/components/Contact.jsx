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
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter username ..." />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter email address ..." />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control">Your message here</textarea>
                    </div>
                </form>
		);
	}

}

export default Contact;