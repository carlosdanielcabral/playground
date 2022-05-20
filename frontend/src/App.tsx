import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import Palindrome from './palindrome/Palindrome';
import Monetary from './monetary/Monetary';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/palindrome" component={Palindrome} />
        <Route exact path="/monetary" component={Monetary} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
