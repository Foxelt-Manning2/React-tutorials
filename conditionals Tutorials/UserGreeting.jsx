import PropTypes from 'prop-types';
function UserGreeting (props) {
    const WelcomePrompt = <h2 className="welcome-prompt">Welcome {props.username}</h2>
    const loginPrompt =<h2 className="login-prompt">Please log in to continue</h2>
  return( props.isLoggedIn ? WelcomePrompt: loginPrompt);
}
UserGreeting.proptypes={
    isLoggedIn :PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.DefaultProps={
    isLoggedIn:false,
    username:"Guest"
}
export default UserGreeting
