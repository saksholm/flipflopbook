import React from 'react';
import Follow from './Follow.jsx';

export default class Person extends React.Component {
    render() {
        return (
          <div>
            <div className="Person">
              Someone's profile
            </div>

            <Follow />
          </div>
            )
    }
}
