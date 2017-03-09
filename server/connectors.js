import {Feeds} from './collections';
import {currentTimestamp} from './tools';
import feedsMockData from './feedsMockData';

export default class FeedsRepository {
  getFeed(skip) {
    // we can implement skip feature later
    const feeds = Feeds.find({}).fetch();
    return feeds;

  }

  addFeed(obj) {
    const addObj = {
      type: obj.type,
      message: obj.message,
      handle: obj.handle,
      timestmap: currentTimestamp(),
      seenBy: [],
    };

    const id = Feeds.insert(addObj);
    addObj._id = id;
    return addObj;

  }
}
