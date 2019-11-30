import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';

class PackageInfo extends Component {
  constructor(props) {
    super(props)
    this.state = { name: props.match.params.name }
  }

  render () {
    return (
      <div>
        <h3>Package information</h3>
        <ul>
          <li>
            <dl>
              <dt>Package:</dt>
              <dd>{ this.state.name }</dd>
            </dl>
          </li>
        </ul>
        <Link to="/">Back to index</Link>
      </div>
    );
  }
}

export default PackageInfo