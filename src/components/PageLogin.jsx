import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchuser } from "../redux/thunks";

class PageLogin extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      username: " "
    };
    this.buttonhandler = this.buttonhandler.bind(this);
    this.usernamehandler = this.usernamehandler.bind(this);
  }

  componentDidUpdate() {
    if (!this.props.user) {
      return;
    }
    this.props.history.push("/list");
  }

  // eslint-disable-next-line react/sort-comp
  usernamehandler(event) {
    this.setState({ username: event.target.value });
  }

  buttonhandler(e) {
    e.preventDefault();
    this.props.fetchuser(this.state.username);
  }

  render() {
    return (
      <div align="center">
        <h3>Login</h3>
        <form onSubmit={e => this.buttonhandler(e)}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            Enter username:
            <input type="text" onChange={this.usernamehandler} />
          </label>
          <button type="submit">login</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  fetchuser: uname => dispatch(fetchuser(uname))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PageLogin));
