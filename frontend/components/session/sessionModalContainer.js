import { connect } from 'react-redux';
import SessionModalForm from './sessionModal';
import { clearErrors, logIn, signUp, swapModalDisplay } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => {
  return {
    displayingSignUpForm: session.displayingSignUpForm,
    errors: session.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    logIn: (user) => dispatch(logIn(user)),
    signUp: (user) => dispatch(signUp(user)),
    swapModalDisplay: (displayingSignUpForm) => dispatch(swapModalDisplay(displayingSignUpForm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionModalForm)