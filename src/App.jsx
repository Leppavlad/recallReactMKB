import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { TheHeader } from './components/TheHeader/TheHeader';
import { MainPage } from './pages/main/Main';
import { ContactPage } from './pages/contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <TheHeader />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/contacts">
            <ContactPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
