import React from 'react';
import {Link} from 'react-router';
var FontAwesome = require('react-fontawesome');

const MenuBar = () => {
  return (
    <div className="MenuBar">
      <Link to="/profile" activeClassName="active"><FontAwesome name='user' size='2x' /><span className='tag'>Profile</span></Link>
      <Link to="/feed" activeClassName="active"><FontAwesome name='list-alt' size='2x' /><span className='tag'>Feed</span></Link>
      <Link to="/people" activeClassName="active"><FontAwesome name='users' size='2x' /><span className='tag'>People</span></Link>
    </div>
  )
}

export default MenuBar
