import React from 'react';
import { Link } from 'react-router-dom';

const PackageList = () => 
  (<div>
    <h3>3 packages</h3>
    <ul>
      <li><Link to={{ pathname: '/package/foo' }}>Foo</Link></li>
      <li><Link to="/package/bar" name="bar">Bar</Link></li>
      <li><Link to="/package/quux" name="quux">Quux</Link></li>
    </ul>
  </div>);

export default PackageList
