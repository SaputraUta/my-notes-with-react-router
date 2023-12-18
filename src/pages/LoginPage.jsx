import React from "react";
import PropTypes from "prop-types";
import InputLogin from "../components/InputLogin";
import { login } from "../utils/network-data";
import ThemeContext from "../context/ThemeContext";

export default function LoginPage({ loginSuccess }) {
  const { theme } = React.useContext(ThemeContext);
  async function onLoginHandler({ email, password }) {
    const { error, data } = await login({ email, password });
    if (!error) {
      loginSuccess(data);
    }
  }
  return (
    <div className={`w-full flex justify-center ${theme==="light"? "bg-cw" : "bg-cb2"}`}>
      <InputLogin login={onLoginHandler} />
    </div>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};
