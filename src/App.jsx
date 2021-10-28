import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { TheHeader } from './components/TheHeader/TheHeader';
import { MainPage } from './pages/main/Main';
import { ContactPage } from './pages/contact/Contact';

import { Modal } from './components/modal/Modal';

function App() {
  const [modalIsOpen, toggleIsOpen] = useState(false);
  const toggleModal = () => {
    console.log('Toggle');
    toggleIsOpen();
  };
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
      <Modal
        message="Some message"
        isOpen={modalIsOpen}
        onClose={toggleModal}
      />
    </div>
  );
}

export default App;
