import React from 'react';
import { connect } from 'react-redux';
import EventCreateForm from './event_create_form';
import { createEvent } from '../../actions/event_actions';
import { clearErrors } from '../../actions/session_actions';
import { fetchCategories } from '../../actions/category_actions';
import { selectCategories } from '../../reducers/selectors';

const mapStateToProps = ( state ) => {

  return {
    event: state.event.event,
    errors: state.event.errors,
    categories: selectCategories(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (event, catIds) => dispatch(createEvent(event, catIds)),
    clearErrors: () => dispatch(clearErrors()),
    fetchCategories: () => dispatch(fetchCategories()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventCreateForm);
