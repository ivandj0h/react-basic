import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Contact from './components/Contact'
import Navbar from './components/Navbar';

class App extends Component {

  onMenuClicked (idx) {
    this.child[idx].setAction();
    this.setState({active:idx});
  }

  changeAction (actionOptions) {
    this.setState({
      action: actionOptions
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      active:0,
      items: [
        { text: "Login"},
        { text: "Register"},
        { text: "Contact"}
      ],
      action: {
        cancel: {
          text: "Cancel"
        },
        submit: {
          text: "Submit"
        }
      }
    }
    this.child = [];
    this.changeAction  = this.changeAction.bind(this);
    this.onMenuClicked = this.onMenuClicked.bind(this);
  }

  render() {
    return (

    <div>
      <Navbar />
      <div className="App">
        <div>
          <br />
        {
          this.state.items.map((item, idx) => (
            <button type="button"  className="btn btn-secondary" onClick={(e) => {
              this.onMenuClicked(idx);
              e.preventDefault();
            }}>{item.text}</button>
          ))
        }    
        
        <section>
            <Login show={this.state.active===0}  changeHandler={ this.changeAction } ref={instance => this.child[0] = instance} />
            <Register show={this.state.active===1} changeHandler={ this.changeAction } ref={instance => this.child[1] = instance} />  
            <Contact show={this.state.active===2}  changeHandler={ this.changeAction } ref={instance => this.child[2] = instance} />            
        </section>
        <div>
          <button className="btn btn-primary mr-sm-2">{this.state.action.cancel.text}</button> 
          <button className="btn btn-danger">{this.state.action.submit.text}</button>
        </div>
      </div>
      </div>
      </div>  
    );
  }
} 

export default App;
