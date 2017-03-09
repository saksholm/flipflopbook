import React from 'react';
import ProfileInfo from './ProfileInfo.jsx';

export default class Profile extends React.Component {
    render() {
        return (
            <div className='Profile content'>
              <ProfileInfo/>
              <div>
                personnal feed here
              </div>
            </div>
            )
    }
}
