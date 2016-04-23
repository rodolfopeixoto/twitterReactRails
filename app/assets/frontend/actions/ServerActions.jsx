import AppDispatcher from "../dispatcher"
import ActionType from "../constants"

export default {
  receivedTweets(rawTweets){
    AppDispatcher.dispatch({
      actionType: ActionType.RECEIVED_TWEETS,
      rawTweets
    })
  }
}
