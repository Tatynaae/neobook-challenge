// Import necessary dependencies
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "../ui/Input/Input";
import Closed from "../../assets/icons/closed";
import Button from "../../components/ui/Button/Button";

// Define the validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

// Define the component
const MyForm = () => {
  const [open, setOpen] = React.useState(false);

  // Initialize Formik with initial values, validation schema, and submit function
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* Username Input */}
      <Input
        type={"text"}
        placeholder={"Имя пользователя"}
        variant="default"
        label={"Имя пользователя"}
        onChange={formik.handleChange}
        defaultValue={formik.values.username}
        onBlur={formik.handleBlur}
      />
      {formik.touched.username && formik.errors.username ? (
        <div>{formik.errors.username}</div>
      ) : null}

      {/* Password Input */}
      <Input
        type={open ? "text" : "password"}
        placeholder={"Пароль"}
        label={"Пароль"}
        icon={<Closed open={open} setOpen={setOpen} />}
        onChange={formik.handleChange}
        defaultValue={formik.values.password}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}

      <Button
        text={"Забыли пароль"}
        variant="link"
        style={{
          textAlign: "start",
        }}
      />

      {/* Submit Button */}
      <div>
        <Button text={"Войти"} type="submit" variant="disabled" />
      </div>

      <Button text={"Зарегистрироваться"} variant="link" />
    </form>
  );
};

export default MyForm;
