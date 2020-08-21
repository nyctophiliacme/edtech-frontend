import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { login, getUserDetails } from "../../services/loginService";
import "./admin_portal.css";

const AdminLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowerror] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(email, password)
      .then((response) => {
        sessionStorage.setItem("userToken", `Token ${response.data.key}`);
        getUserDetails(sessionStorage.getItem("userToken")).then((response) => {
          if (response.data.is_superteacher_admin) {
            setShowerror(false);
            props.history.push("/ad/e");
          } else {
            setShowerror(true);
          }
        });
      })
      .catch((error) => {
        setShowerror(true);
        console.log(error);
      });
  }

  return (
    <div className="login-admin">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
        {showError ? (
          <div className="admin-error">Please enter valid admin user credentials</div>
        ) : null}
      </form>
    </div>
  );
};

export default AdminLogin;
