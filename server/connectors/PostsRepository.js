import {Posts} from '../collections';
import {currentTimestamp} from '../tools';


export default class PostsRepository {
  getPosts(skip) {
    // we can implement skip feature later
    const posts = Posts.find({}, {sort: {timestamp: -1}}).fetch();
    return posts;
  }

  addPost(obj) {
    const addObj = {
      type: obj.type,
      message: obj.message,
      handle: obj.handle,
      userId: obj.userId,
      timestamp: currentTimestamp(),
      seenBy: [],
    };

    const id = Posts.insert(addObj);
    addObj._id = id;

    return addObj;

  }
}
