import React from "react";
import LocaleContext from "../context/LocaleContext";

export default function LocaleSwitch() {
  const { locale, toggleLocale } = React.useContext(LocaleContext);
  return (
    <button onClick={toggleLocale} className="font-bold text-xl">
      {locale === "id" ? "ID" : "EN"}
    </button>
  );
}
