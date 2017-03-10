import React from 'react';
import {Link} from 'react-router';
import {Meteor} from 'meteor/meteor';
var FontAwesome = require('react-fontawesome');


export default class MenuBar extends React.Component {
  handleLogout(e){
        Meteor.logout();
  }

  render() {
    return (
      <div className="MenuBar">
        <Link to="/profile" activeClassName="active"><FontAwesome name='user' /><span className='tag'>Profile</span></Link>
        <Link to="/feed" activeClassName="active"><FontAwesome name='list-alt' /><span className='tag'>Feed</span></Link>
        <Link to="/people" activeClassName="active"><FontAwesome name='users' /><span className='tag'>People</span></Link>
        <Link to="#" activeClassName="active"><FontAwesome name='sign-out' /><div className="logout" onClick={e => (this.handleLogout(e))}>logout</div></Link>
      </div>
          )
        }
}
