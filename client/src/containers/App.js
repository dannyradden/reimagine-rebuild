import React, { PropTypes } from 'react';
import { AuthGlobals } from 'redux-auth/material-ui-theme';
import NavBar from '../components/Navbar';

const App = ({ children }) => (
  <div className="app-container">
    <AuthGlobals />
    <NavBar />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
