import React from 'react';
import BlogActionCreators from '../../actions/BlogActionCreators';
import BlogStore from '../../stores/BlogStore';

class BlogArticle extends React.Component {
  constructor (props){
    super(props);
  }

  componentDidMount(){
  }

  componentWillUnmount(){
    BlogStore.removeChangeListener(this._onChange);
  }

  render (){
    return (
      <div className="ui container content">
        <h3>{this.props.article.title}</h3>
      </div>
    )
  }
}

export default BlogArticle;
