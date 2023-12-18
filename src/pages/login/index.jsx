import React from "react";

import { Input } from "../../components/ui/Input/Input";
import banner from "../../assets/images/image 1.png";
import Basket from "../../assets/icons/basket";
import Button from "../../components/ui/Button/Button";
import Closed from "../../assets/icons/closed";

import "./index.scss";

import { useDispatch, useSelector } from "react-redux";
import { selectAuth, setPassword, setUsername } from "../../store/authSlice";

const Login = () => {
  const [open, setOpen] = React.useState(false);
  // const [validData, setValidData] = React.useState(false);

  const dispatch = useDispatch();
  const { username, password } = useSelector(selectAuth);

  const handleUsernameChange = (e) => {
    dispatch(setUsername(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // const checkUserDate = () => {
  //   if (username === "Tatyna" && password === "neobis2023") {
  //     setValidData(true);
  //   } else {
  //     setValidData(false);
  //   }
  // }

  return (
    <div className="login">
      <div className="banner">
        <img src={banner} alt="#" />
        <div className="rec"></div>
        <div className="basket">
          <Basket />
        </div>
      </div>
      <div className="enter">
        <div className="top-enter">
          <form className="form" onSubmit={handleSubmit}>
            <Input
              type={"text"}
              placeholder={"Имя пользователя"}
              variant="default"
              label={"Имя пользователя"}
              onChange={handleUsernameChange}
              value={username}
            />

            <Input
              type={open ? "text" : "password"}
              placeholder={"Пароль"}
              label={"Пароль"}
              icon={<Closed open={open} setOpen={setOpen} />}
              onChange={handlePasswordChange}
              value={password}
            />

            <Button
              text={"Забыли пароль"}
              variant="link"
              className={"linked"}
            />
            <Button
              type="submit"
              text={"Войти"}
              variant={username && password ? "default" : "disabled"}
              className={"enter-btn"}
            />
          </form>

          <Button text={"Зарегистрироваться"} variant="link" />
        </div>
      </div>
    </div>
  );
};

export default Login;
