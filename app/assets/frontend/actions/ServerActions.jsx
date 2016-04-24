import AppDispatcher from "../dispatcher"
import ActionType from "../constants"

export default {
  receivedTweets(rawTweets){
    AppDispatcher.dispatch({
      actionType: ActionType.RECEIVED_TWEETS,
      rawTweets
    })
  },
  receivedOneTweet(rawTweet){
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_TWEET,
      rawTweet
    })
  },
  receivedUsers(rawUsers){
    AppDispatcher.dispatch({
      actionType: ActionType.RECEIVED_USERS,
      rawUsers
    })
  }
}
