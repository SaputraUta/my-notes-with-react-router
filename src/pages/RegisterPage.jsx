import React from "react";
import InputRegister from "../components/InputRegister";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/network-data";
import ThemeContext from "../context/ThemeContext";

export default function RegisterPage() {
  const { theme } = React.useContext(ThemeContext);
  const navigate = useNavigate();
  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }
  return (
    <div className={`w-full flex justify-center ${theme==="light"? "bg-cw" : "bg-cb2"}`}>
      <InputRegister register={onRegisterHandler} />
    </div>
  );
}
