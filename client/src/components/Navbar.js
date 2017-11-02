import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Navbar extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Signin With Google</a>
          </li>
        );
      default:
        return (
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="row">
            <div className="col-md-9 navbar-header">
              <p>
                <Link className="home-link" to="/">
                  Recycling Request Tool
                </Link>
              </p>
              {this.renderContent()}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Navbar);
