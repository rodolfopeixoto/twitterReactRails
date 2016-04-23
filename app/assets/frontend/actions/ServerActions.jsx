import AppDispatcher from "../dispatcher"
import ActionType from "../constants"

export default {
  receivedTweets(rawTweets){
    AppDispatcher.dispatch({
      actionType: ActionType.RECEIVED_TWEETS,
      rawTweets
    })
  },
  receivedOnTweet(rawTweet){
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ON_TWEET,
      rawTweet
    })
  }
}
