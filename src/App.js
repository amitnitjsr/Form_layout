import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './components/Pages/Profile/Profile';
import Notification from './components/Pages/Profile/Notification';
import Mytask from './components/Pages/Mytask/Mytask';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Sidebar />
          <Route exact path='/profile' component={Profile} />
          <Route path='/notification' component={Notification} />
          <Route path='/tast_1' component={Mytask} />
          <Route />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
