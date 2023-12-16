import React from "react";
import "./index.scss";

import banner from "../../assets/images/image 1.png";
import Basket from "../../assets/icons/basket";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button";
import Closed from "../../assets/icons/closed";

const Login = () => {
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
          <form className="form">
            <Input
              type={"text"}
              placeholder={"Имя пользователя"}
              variant="default"
              label={"Имя пользователя"}
            />
            <Input type={open ? "text" : "password"} placeholder={"Пароль"} label={"Пароль"} icon={<Closed open={open} setOpen={setOpen}/>}/>
          </form>
          <p>Забыли пароль</p>
          <Button text={"Войти"} />
          <Button text={"Зарегистрироваться"} />
        </div>
      </div>
    </div>
  );
};

export default Login;
