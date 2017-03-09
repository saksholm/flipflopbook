import {currentTimestamp} from './tools';

const data = [
 {
   type: 'post',
   message: 'Hello world',
   handle: 'Joni',
   timestamp: (currentTimestamp() - 100 ),
   seenBy: [],
 }, {
   type: 'post',
   message: 'Hello FlipFloppers',
   handle: 'Joni',
   timestamp: (currentTimestamp() - 50),
   seenBy: [],
 }
]

export default data;
