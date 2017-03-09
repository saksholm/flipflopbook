import React from 'react';

export class PostForm extends React.Component {

    onSubmit(event) {
        event.preventDefault();
        // const content = Meteor.user().profile.name;
        // this.props.submit({variables: {channelName: this.props.channelName, handle:name, message:this.refs.message.value}})
        // this.refs.message.value = '';
    }

    render() {

        return <div className="PostForm">
          <form onSubmit={(event) => this.onSubmit(event)}>
            <input type="text" ref="text"/>
            <input type="submit"/>
          </form>
        </div>
    }
}
