import React from 'react';

import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";

import './App.css';
import Home from "./components/home/home"
import Proxi from "./components/proxies/proxies"
import Billing from "./components/biling/billing"
import Accounts from './components/accounts/accounts';
import Rates from './components/rates/rates'
import Settings from './components/settings/setting'
class App extends React.Component {
  render() {
    return (



      <Router>
        <Route exact path='/settings' component={Settings} />
        <Route exact path="/rates" component={Rates} />
        <Route exact path="/accounts" component={Accounts} />
        <Route exact path='/billing' component={Billing} />
        <Route exact path='/proxies' component={Proxi} />
        <Route exact path="/" component={Home} />
      </Router>






    );
  }
}

export default App;