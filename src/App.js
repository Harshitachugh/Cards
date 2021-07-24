import './App.css';
import React from "react";
import { Header } from './components/Header';
import { Route, Switch } from 'react-router-dom';
import { First, Profile } from 'pages/First/profile';
import { Home } from 'home'

const App = () => {
  return (

    <div className="App" class="app-main">
      <Header />
      <br />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/profile/:id' component={Profile} />
      </Switch>

    </div>
  );
}

export default App;
