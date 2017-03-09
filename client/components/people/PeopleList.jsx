import React from 'react';
import Person from './Person.jsx';
import Follow from './Follow.jsx';
//const demoPeople = [{type:"text", time:"10:00AM", author:"Someone", content:"Hello World!"}, {type:"image", time:"10:00AM", author:"Someone", content:"http://google.com"}];


export default class PeopleList extends React.Component {
    render() {
        return (
            <div>
              {/* Map that */}
              <Person />
              <Follow />
              {/* endMap */}
            </div>
            )
    }
}
