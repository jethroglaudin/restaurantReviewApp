import React, { useContext, useEffect, useState } from "react";
import UserFinder from "../../apis/UserFinder";
import AuthContext from "../../context/auth/authContext";
// import loadUser from "../../context/auth/AuthState";

const Login = (props) => {
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated} = authContext;
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error) {
      console.log(error);
    }
  }, [error, isAuthenticated, props.history]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    // run logging functionality
    if (email === "" || password === "") {
      console.log("please fill all fields");
    } else {
      await login({
        email,
        password,
      });
    }
  };
  return (
    <div>
      <h1 className="text-center">Login</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            name="email"
            onChange={onChange}
            id="email"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Password</label>
          <input
            value={password}
            name="password"
            onChange={onChange}
            id="password"
            className="form-control"
            type="text"
          />
        </div>
        <button type="submit" onClick={onSubmit} className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
