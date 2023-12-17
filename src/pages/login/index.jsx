import React from "react";
import "./index.scss";

import banner from "../../assets/images/image 1.png";
import Basket from "../../assets/icons/basket";
import Input from "../../components/ui/Input/Input";

import Button from "../../components/ui/Button/Button";
import Closed from "../../assets/icons/closed";


import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../store/counterSlice";

const Login = () => {

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  const [open, setOpen] = React.useState(false);
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
          {/* tttttt */}
          <div>
            <p>Counter: {counter}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
          </div>
          {/* tttttt */}
          <form className="form">
            <Input
              type={"text"}
              placeholder={"Имя пользователя"}
              variant="default"
              label={"Имя пользователя"}
            />
            <Input
              type={open ? "text" : "password"}
              placeholder={"Пароль"}
              label={"Пароль"}
              icon={<Closed open={open} setOpen={setOpen} />}
            />
          </form>
          <Button text={"Забыли пароль"} variant="link" className={"linked"} />
          <Button text={"Войти"} variant="disabled" className={"enter-btn"} />
          <Button text={"Зарегистрироваться"} variant="link" />

        </div>
      </div>
    </div>
  );
};

export default Login;
