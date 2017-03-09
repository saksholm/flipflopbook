import React from 'react';
import {Link} from 'react-router';
import FontAwesome from 'react-fontawesome';

const MenuBar = () => {
  return (
    <div className="MenuBar">
      <FontAwesome name="user" />
      <Link to="/profile"><FontAwesome className="profileIcon" name="user" size="2x" />profile link</Link>
      <Link to="/feed">Feed link</Link>
    </div>
  )
}

export default MenuBar
