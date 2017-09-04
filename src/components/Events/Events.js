import React from 'react';
import EventActionCreators from '../../actions/EventActionCreators';
import EventStore from '../../stores/EventStore';
import EventItem from './EventItem';

class Events extends React.Component {
  constructor(){
    super();
    this.state = {
      events: [],
      errors: []
    };

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount (){
    EventStore.addChangeListener(this._onChange);
    EventActionCreators.getEvents();
  }

  componentWillUnmount (){
    EventStore.removeChangeListener(this._onChange);
  }

  _onChange (){
    this.setState({
      events: EventStore.getEvents().reverse(),
      errors: EventStore.getErrors()
    });
  }

  render (){
    let events = this.state.events, eventItems;
    if(events){
      eventItems = events.map(function(event, index){
        return (<EventItem key={index} event={event}/>);
      });
    }

    return <div>
      <h1>When To Jump Events in Your Area</h1>
      <div className="ui container">
        {eventItems}
      </div>
    </div>
  }
}

export default Events;
