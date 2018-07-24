import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import GraphModule from './components/GraphModule/GraphModule';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" exact render={_ => <GraphModule />} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
