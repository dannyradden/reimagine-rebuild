import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignatureList extends Component {
  ComponentDidUpdate() {
    console.log('child updatedddddd');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('scu child', nextProps);
    return true;
  }
  render() {
    return (
      <div className="sign-campaign-wrapper">
        <h2>Signatures</h2>
        <ul>
          {this.props.signatures &&
            this.props.signatures.map(({ id, name, email }) => (
              <li key={id}>
                {name}: {email}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default SignatureList;
