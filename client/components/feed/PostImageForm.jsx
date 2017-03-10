import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import update from 'immutability-helper';

import fileToBase64 from '../../utils/fileToBase64';

class PostImageForm extends React.Component {
  state = {
    isBusy: false,
  };

  handleChange(e) {
    const file = e.target.files[0];
    if (file) {
      this.setState({isBusy: true});
      fileToBase64(file)
        .then(this.props.upload)
        .then(() => {
          this.setState({isBusy: false})
        })
        .catch(error => {
          alert('upload failed: ' + error);
          this.setState({isBusy: false});
        });
    }
  }

  render() {
    const {isBusy} = this.state;
    return <div className="PostImageForm">
      <input
        type="file"
        accept="image/png, image/jpeg, image/gif"
        disabled={isBusy}
        onChange={e => this.handleChange(e)}
      />
      {isBusy && <p>uploading...</p>}
    </div>;
  }
}

const mutation = gql`
  mutation postImage($post:String!, $base64ImageData:Base64EncodedImage!){
    postImage(post: $post, base64ImageData: $base64ImageData) {
      id
      handle
      url
    }
  }
`;

export default graphql(mutation, {
  props: ({ mutate, ownProps }) => {
    return {
      upload: base64ImageData => {
        return mutate({
          variables: {

            post: ownProps.post.message,
            base64ImageData,
          },
          updateQueries: {
            Post: (previousResult, { mutationResult }) => {
              return update(previousResult, {
                post: {
                  messages: {
                    $push: [mutationResult.data.postImage],
                  },
                },
              });
            },
          },
        });
      }
    }
  },
})(PostImageForm);
