import React from "react";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="userName">Username</label>
              <input type="text" name="userName" placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="userEmail">Email</label>
              <input type="email" name="userEmail" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="passowrd">Password</label>
              <input type="password" name="password" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}
