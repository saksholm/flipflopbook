import React from 'react';
import {Link} from 'react-router';
var FontAwesome = require('react-fontawesome');

const MenuBar = () => {
  return (
    <div className="MenuBar">
      <Link to="/profile"><FontAwesome name='user' size='2x' />profile link</Link>
      <Link to="/feed">Feed link</Link>
    </div>
  )
}

export default MenuBar
