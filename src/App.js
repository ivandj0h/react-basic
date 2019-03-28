import React, { Component } from 'react';
import './App.css';
import Product from './components/Product'
import Navbar from './components/Navbar';

class App extends Component {

  state = {
    produks: [
      {id: '1', namaProduk: 'Laptop Asus', hargaProduk: '5.000.000', stokProduk: '10'},
      {id: '2', namaProduk: 'Macbook Pro', hargaProduk: '35.000.000', stokProduk: '5'},
      {id: '3', namaProduk: 'Laptop Lenovo', hargaProduk: '4.000.000', stokProduk: '15'}
    ]
  }

  gantiHarga = (id) => {
    this.setState= ({
      namaProduk: '11'
    })
    console.log(this.state.produks[0].stokProduk)
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Product produks={this.state.produks} gantiHarga={this.gantiHarga}/>
      </div>
    );
  }
}

export default App;
