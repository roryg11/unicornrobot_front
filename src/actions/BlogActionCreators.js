import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import WebAPIUtils from '../utils/WebAPIUtils';

const ActionTypes = AppConstants.ActionTypes;

const BlogActionCreators = {
  fetchBlogFeed: function(){
    AppDispatcher.handleViewAction({
      type: ActionTypes.RSS_FEED_REQUEST
    });

    WebAPIUtils.getRSSFeed();
  }
}

export default BlogActionCreators;
