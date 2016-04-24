import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import { EventEmitter } from "events";

let _tweets = [];
const CHANGE_EVENT = "CHANGE";

class TweetEventEmitter extends EventEmitter {

  // formattedTweets(tweetsList){
  //   let formattedList = tweetsList.map( tweet => {
  //     tweet.formattedDate = moment(tweet.created_at).fromNow();
  //     return tweet;
  //   });
  //   return {
  //    tweetsList: formattedList
  //   };
  // }


  getAll() {
      return _tweets.map( tweet => {
        tweet.formattedDate = moment(tweet.created_at).fromNow();
        return tweet;
      });
    return _tweets;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback){
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(){
    this.removeListener(CHANGE_EVENT, callback);
  }
}


let TweetStore = new TweetEventEmitter();

AppDispatcher.register( action => {
   switch (action.actionType) {
     case ActionTypes.RECEIVED_TWEETS:
       _tweets = action.rawTweets;
       TweetStore.emitChange();
       break;
    case ActionTypes.RECEIVED_ONE_TWEET:
      _tweets.unshift(action.rawTweet);
      TweetStore.emitChange();
     default:

   }
 });

export default TweetStore;
