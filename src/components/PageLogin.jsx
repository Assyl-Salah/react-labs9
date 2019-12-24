import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class PageLogin extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div align="center">
        <h3>Login</h3>
        <input type="text" />
      </div>
    );
  }
}
export default connect(null, null)(withRouter(PageLogin));
