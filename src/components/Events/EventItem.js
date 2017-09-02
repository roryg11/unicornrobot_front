import React from 'react';


class EventItem extends React.Component {
  render (){
    return (<div>
        <h4>Event Name</h4>
        <p>{this.props.event.name.text}</p>
        <p>{this.props.event.description.text}</p>
        <p>{this.props.event.url}</p>
      </div>);
  }
}

export default EventItem;
