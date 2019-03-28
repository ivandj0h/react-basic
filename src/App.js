import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Contact from './components/Contact'

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
        { text: "Registration"},
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
      <div className="App">
        <div>
        <h2>Didin Application</h2>        
        {
          this.state.items.map((item, idx) => (
            <button onClick={(e) => {
              this.onMenuClicked(idx);
              e.preventDefault();
            }}>{item.text}</button>
          ))
        }    
        
        <section>
            <Login show={this.state.active==0}  changeHandler={ this.changeAction } ref={instance => this.child[0] = instance} />
            <Registration show={this.state.active==1} changeHandler={ this.changeAction } ref={instance => this.child[1] = instance} />  
            <Contact show={this.state.active==2}  changeHandler={ this.changeAction } ref={instance => this.child[2] = instance} />            
        </section>
        <div>
          <button>{this.state.action.cancel.text}</button>
          <button>{this.state.action.submit.text}</button>
        </div>
      </div>
      </div>
    );
  }
} 

export default App;
