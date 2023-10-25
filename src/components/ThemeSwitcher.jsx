import { useState } from "react";
import "./ThemeSwitcher.css";

export default function ThemeSwitcher({ themeState, setThemeState }) {
  function switchTheme() {
    themeState === "dark" ? setThemeState("light") : "";
    themeState === "light" ? setThemeState("alternative") : "";
    themeState === "alternative" ? setThemeState("dark") : "";
  }
  return (
    <div className="theme-switcher">
        
      <div className="labels">
        <button onClick={() => setThemeState("dark")}>
          <p className="noselect">1</p>
        </button>
        <p className="noselect" onClick={() => setThemeState("light")}>2</p>
        <p className="noselect" onClick={() => setThemeState("alternative")}>3</p>
      </div>

      <button onClick={switchTheme}>
        <div className={`switch ${themeState}`}>
          <div className="dot"></div>
        </div>
      </button>
    </div>
  );
}
