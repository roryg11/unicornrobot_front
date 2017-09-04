import React from 'react';


class EventItem extends React.Component {
  render (){
    if(this.props.event.speaker){
      return (<div className="ui segment">
          <h3><a href={this.props.event.url} target="_blank" rel="noopener noreferrer"> {this.props.event.title}</a></h3>
          <p>{this.props.event.short_description}</p>
          <p>When: {this.props.event.date}</p>
          <p>Where: {this.props.event.location}</p>
          <p>Guest Speaker: {this.props.event.speaker}</p>
        </div>);
    } else {
      return (<div className="ui segment">
          <h3><a href={this.props.event.url} target="_blank" rel="noopener noreferrer"> {this.props.event.title}</a></h3>
          <p>{this.props.event.description}</p>
        </div>)
    }

  }
}

export default EventItem;
