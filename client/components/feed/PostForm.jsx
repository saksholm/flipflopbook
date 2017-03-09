import React from 'react';

export default class PostForm extends React.Component {

    onSubmit(e) {
        e.preventDefault();
        // const content = Meteor.user().profile.name;
        // this.props.submit({variables: {channelName: this.props.channelName, handle:name, message:this.refs.message.value}})
        // this.refs.message.value = '';
    }

    render() {

        return (
          <div className="PostForm">
            <form onSubmit={e => this.onSubmit(e)}>
              <input type="text" ref="text"/>
              <input type="submit"/>
            </form>
          </div>
        )
    }
}
