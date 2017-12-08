import React, { Component } from 'react';
import './App.css';
import NavBar from './../../components/NavBar/NavBar';
import {
  Switch,
  Route
} from 'react-router-dom';
import HomePage from '../HomePage/HomePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      order: {}
    }
  }

  // Lifecycle methods
  componentDidMount() {
    let findProducts = fetch('/api/products').then(res => res.json());
    let findOrder = fetch('/api/order').then(res => res.json());
    Promise.all([findProducts, findOrder]).then(data => {
      this.setState({products: data[0], order: data[1]})
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" render={(props) =>
            <HomePage />
            }
          />
          <Route exact path="/catalogue" />
          <Route exact path="/checkout" />
          <Route exact path="/order-confirmation" />
        </Switch>
      </div>
    );
  }
}

export default App;
