import React, { useEffect, useState, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import AddPage from "../pages/AddPage";
import ArchivedPage from "../pages/ArchivedPage";
import HomePage from "../pages/HomePage";
import NoteDetailPageWrapper from "../pages/NoteDetailPage";
import PageNotFound from "./PageNotFound";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { getUserLogged, putAccessToken } from "../utils/network-data";
import Navigation from "./Navigation";
import ThemeContext from "../context/ThemeContext";
import LocaleContext from "../context/LocaleContext";

export default function NoteApp() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");

  useEffect(() => {
    const fetchUserData = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    };
    fetchUserData();
  }, []);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
    setInitializing(false);
  }

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken("");
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === "id" ? "en" : "id";
      localStorage.setItem("locale", newLocale);
      return newLocale;
    });
  };

  const ThemeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  const LocaleContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  if (initializing) {
    return null;
  }
  if (authedUser === null) {
    return (
      <>
        <ThemeContext.Provider value={ThemeContextValue}>
          <LocaleContext.Provider value={LocaleContextValue}>
            <div>
              <main>
                <Routes>
                  <Route
                    path="/*"
                    element={<LoginPage loginSuccess={onLoginSuccess} />}
                  />
                  <Route path="/register" element={<RegisterPage />} />
                </Routes>
              </main>
            </div>
          </LocaleContext.Provider>
        </ThemeContext.Provider>
      </>
    );
  }
  return (
    <>
      <ThemeContext.Provider value={ThemeContextValue}>
        <LocaleContext.Provider value={LocaleContextValue}>
          <div
            className={`min-h-screen ${
              theme === "light" ? "bg-white" : "bg-cb2"
            }`}
          >
            <Navigation logout={onLogout} />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add" element={<AddPage />} />
                <Route path="/archived" element={<ArchivedPage />} />
                <Route path="/notes/:id" element={<NoteDetailPageWrapper />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </main>
          </div>
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
