import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Nosotros from './Nosotros';
import Eventos from './Eventos';
import Contacto from './Contacto';
import NoMatch from './NoMatch';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header/>
            <Switch>
              <Route exact path="/" component={ Main }/>
              <Route path="/inicio" component={ Main }/>
              <Route path="/nosotros" component={ Nosotros }/>
              <Route path="/eventos" component={ Eventos }/>
              <Route path="/contacto" component={ Contacto }/>
              <Route component={ NoMatch }/>
            </Switch>
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
