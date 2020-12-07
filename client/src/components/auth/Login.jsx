import React, { useState } from "react";

const Login = () => {
  const [formDate, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    // run logging functionality
    return null;
  };
  return <div></div>;
};

export default Login;