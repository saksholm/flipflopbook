import React from 'react';
import PeopleList from './PeopleList.jsx';
//const demoPeople = [{type:"text", time:"10:00AM", author:"Someone", content:"Hello World!"}, {type:"image", time:"10:00AM", author:"Someone", content:"http://google.com"}];


export default class People extends React.Component {
    render() {
        return (
            <div className='People content'>
              {/* Search form */}
              <PeopleList />
            </div>
            )
    }
}
