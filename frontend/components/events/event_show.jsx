import React from 'react';
import { Link } from 'react-router';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.params.eventId);
  }

  render () {
    debugger
    return (
      <div>hi</div>
    );
  }
}

export default EventShow;
