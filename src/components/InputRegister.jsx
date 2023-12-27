import React, { useState } from "react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import LocaleContext from "../context/LocaleContext";

export default function InputRegister({ register }) {
  const [isLoading, setIsLoading] = useState(false);
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const { theme } = React.useContext(ThemeContext);
  const { locale } = React.useContext(LocaleContext);
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    await register({ name: name, email: email, password: password });
    setIsLoading(false);
  };
  return (
    <div className="flex flex-col w-full h-screen">
      <h1
        className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider mt-36 lg:mt-32 text-center ${
          theme === "light" ? "text-slate-800" : "text-tg"
        }`}
      >
        {locale === "id" ? "Daftar akun" : "Register account"}
      </h1>
      <form
        onSubmit={onSubmitHandler}
        className="w-full flex flex-col mt-5 items-center gap-5"
      >
        <input
          type="text"
          name="name"
          value={name}
          onChange={onNameChange}
          placeholder="Name"
          className="rounded-lg text-sm sm:text-base p-2 w-3/4 lg:w-1/2 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
          className="rounded-lg text-sm sm:text-base p-2 w-3/4 lg:w-1/2 focus:outline-none"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
          className="rounded-lg text-sm sm:text-base p-2 w-3/4 lg:w-1/2 focus:outline-none"
        />
        <p
          className={`${theme === "light" ? "text-slate-800" : "text-tg"} ${
            isLoading ? "block" : "hidden"
          }`}
        >
          {locale === "id" ? "Mendaftarkan akun..." : "Registering account..."}
        </p>
        <button
          type="submit"
          className={`w-3/4 lg:w-1/2 p-2 text-sm sm:text-base rounded-lg font-bold ${
            theme === "light" ? "bg-cb text-tg" : "bg-cg text-tb"
          }`}
        >
          {locale === "id" ? "Daftar" : "Register"}
        </button>
      </form>
      <p
        className={`text-center text-sm sm:text-base mt-5 ${
          theme === "light" ? "text-slate-800" : "text-tg"
        }`}
      >
        {locale === "id" ? "Kembali ke " : "Back to "}
        <Link to="/" className="underline">
          {locale === "id" ? "masuk" : "login"}
        </Link>
      </p>
    </div>
  );
}

InputRegister.propTypes = {
  register: PropTypes.func.isRequired,
};
