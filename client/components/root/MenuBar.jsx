import React from 'react';
import {Link} from 'react-router';

const MenuBar = () => {
  return (
    <div className="MenuBar">
      <Link to="/profile">profile link</Link>
      <Link to="/feed">Feed link</Link>
    </div>
  )
}

export default MenuBar
