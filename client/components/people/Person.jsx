import React from 'react';
import Follow from './Follow.jsx';

export default class Person extends React.Component {
    render() {
        return (
          <div>
            <div className="Person">
              Someone's profile
              <img src="https://graph.facebook.com/10155098577208234/picture?type=large" alt='Profile' />
            </div>

            <Follow />
          </div>
            )
    }
}
