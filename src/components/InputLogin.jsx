import React from "react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

export default function InputLogin({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const { theme } = React.useContext(ThemeContext);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    login({ email: email, password: password });
  };
  return (
    <div className="flex flex-col w-full h-screen">
      <h1
        className={`text-3xl font-bold tracking-wider mt-32 text-center ${
          theme === "light" ? "text-slate-800" : "text-tg"
        }`}
      >
        Aplikasi Kontak
      </h1>
      <form
        onSubmit={onSubmitHandler}
        className="w-full flex flex-col mt-5 items-center gap-5"
      >
        <input
          type="email"
          name="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
          className="rounded-lg p-2 w-1/2 focus:outline-none"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
          className="rounded-lg p-2 w-1/2 focus:outline-none"
        />
        <button
          type="submit"
          className={`w-1/2 p-2 rounded-lg font-bold ${
            theme === "light" ? "bg-cb text-tg" : "bg-cg text-tb"
          }`}
        >
          Masuk
        </button>
      </form>
      <p
        className={`text-center mt-5 ${
          theme === "light" ? "text-slate-800" : "text-tg"
        }`}
      >
        Belum punya akun?{" "}
        <Link to="register" className="underline">
          Registrasi disini
        </Link>
      </p>
    </div>
  );
}

InputLogin.propTypes = {
  login: PropTypes.func.isRequired,
};
