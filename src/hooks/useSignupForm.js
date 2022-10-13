import { useState } from "react";

const useSignupForm = ({ initialValues, onSubmit, validate }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const regExp = "^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(.[0-9a-zA-Z_-]+){2,3}$";
    if (name === "email") {
      if (value.match(regExp)) {
        setEmailError(false);
      } else {
        setEmailError(true);
      }
    } else if (name === "password") {
      if (value.length >= 8) {
        setPasswordError(false);
      } else {
        setPasswordError(true);
      }
    }
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate ? validate(values) : {};
    if (Object.keys(newErrors).length === 0) {
      await onSubmit(values);
    }
    setErrors(newErrors);
  };
  return {
    values,
    errors,
    emailError,
    passwordError,
    handleChange,
    handleSubmit,
  };
};

export default useSignupForm;
