import React from 'react';

class BlogArticle extends React.Component {
  constructor (props){
    super(props);
  }

  render (){
    let paragraphs = this.props.article.parsed_content.map(function(paragraph, index){
      return <p key={index}>{paragraph}</p>
    });
    return (
      <div className="ui vertical segment">
        <h3 className="ui horizontal divider">{this.props.article.title}</h3>
        <p>{this.props.article.publish_date}</p>
        {paragraphs}
      </div>
    )
  }
}

export default BlogArticle;
