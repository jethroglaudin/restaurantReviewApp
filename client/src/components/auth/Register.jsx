import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Register = (props) => {
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated } = authContext;
  let history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      // Redirect to home page
      props.history.push("/");
    }
    if (error) {
      console.log(error);
    }
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, userName, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      console.log("Please enter all fields");
      return;
    } else if (password !== password2) {
      console.log("Passwords do not match");
      return;
    } else {
      register({
        name,
        userName,
        email,
        password,
        password2,
      });
    }
    props.history.push("/login");
  };

  return (
    <div>
      <h1 className="text-center">Register</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={onChange}
            name="name"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input
            value={userName}
            onChange={onChange}
            name="userName"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={onChange}
            name="email"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={onChange}
            name="password"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="text"
            name="password2"
            className="form-control"
            value={password2}
            onChange={onChange}

            // required
            // minLength="6"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
