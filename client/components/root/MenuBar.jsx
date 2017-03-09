import React from 'react';
import {Link} from 'react-router';
var FontAwesome = require('react-fontawesome');

const MenuBar = () => {
  return (
    <div className="MenuBar">
      <Link to="/profile"><FontAwesome name='user' size='2x' /><span className='tag'>Profile</span></Link>
      <Link to="/feed"><span className='tag'>Feed</span></Link>
    </div>
  )
}

export default MenuBar
