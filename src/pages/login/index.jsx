import React from "react";
import Banner from "./banner";
import MyForm from "../../components/formik";

import "./index.scss";

// import { useDispatch, useSelector } from "react-redux";
// import { selectAuth, setPassword, setUsername } from "../../store/authSlice";

const Login = () => {
  // const dispatch = useDispatch();
  // const { username, password } = useSelector(selectAuth);


  return (
    <div className="login">
        <Banner />
      <div className="enter">
        <MyForm />
      </div>
    </div>
  );
};

export default Login;
