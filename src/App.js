import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Inviter from './Inviter/Inviter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header headerText="Instant Inviter">
          Invite your friends instantly to your events!
        </Header>
        <Inviter />
        <Footer footerText="Copyright &copy; 2017"/>
      </div>
    );
  }
}

export default App;
