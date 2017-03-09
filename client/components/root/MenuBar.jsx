import React from 'react';
import {Link} from 'react-router';
var FontAwesome = require('react-fontawesome');

const MenuBar = () => {
  return (
    <div className="MenuBar">
      <Link to="/profile" activeClassName="active"><FontAwesome name='user' /><span className='tag'>Profile</span></Link>
      <Link to="/feed" activeClassName="active"><FontAwesome name='list-alt' /><span className='tag'>Feed</span></Link>
      <Link to="/people" activeClassName="active"><FontAwesome name='users' /><span className='tag'>People</span></Link>
    </div>
  )
}

export default MenuBar
