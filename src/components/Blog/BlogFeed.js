import React from 'react';
import BlogActionCreators from '../../actions/BlogActionCreators';
import BlogStore from '../../stores/BlogStore';
import BlogArticle from './BlogArticle';
//  this iframe should be temporary -- we need a way to embed the RSS feed

function getStateFromStores(){
  return {
    feed: BlogStore.getFeed(),
    errors: BlogStore.getErrors()
  }
}

class BlogFeed extends React.Component {
  constructor (){
    super();
    this.state = {
      feed: [],
      errors: []
    }
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount(){
    BlogStore.addChangeListener(this._onChange);
    BlogActionCreators.fetchBlogFeed();
  }

  componentWillUnmount(){
    BlogStore.removeChangeListener(this._onChange);
  }

  _onChange(){
    this.setState(getStateFromStores());

  }

  render (){
    let articles;
    if(this.state.feed){
      articles = this.state.feed.map(function(article){
        return <BlogArticle article={article} key={article.publish_date}/>
      });
    }

    return (
      <div className="ui container content">
        <h1>Blog</h1>
        <div>{articles}</div>
      </div>
    );
  }
}

export default BlogFeed;
