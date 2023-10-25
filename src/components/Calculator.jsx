import ThemeSwitcher from "./Themeswitcher";

import Screen from "./Screen";
import { useState } from "react";
import Key from "./Key";
export default function Calculator() {
  const [themeState, setThemeState] = useState("dark");
  const [screenValue, setScreenValue] = useState("");
  const [secondaryScreenValue, setSecondaryScreenValue] = useState("");
  function calculate() {
    let handleX = secondaryScreenValue.replace("×", "*");
    console.log(handleX);
    setSecondaryScreenValue(handleX);
    setScreenValue(eval(handleX + screenValue));
    setSecondaryScreenValue("");
  }
  document.addEventListener("DOMContentLoaded", () => {
    addKeyBinds();
  });
  function addKeyBinds() {
    document.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        e.preventDefault();
        document.getElementById("keyequal").click();
      }
      if (e.key == "Delete") {
        document.getElementById("keydel").click();
      }
      if (e.key == "Backspace") {
        document.getElementById("keydel").click();
      }
      if (e.key == "0") {
        document.getElementById("key0").click();
      }
      if (e.key == "1") {
        document.getElementById("key1").click();
      }
      if (e.key == "2") {
        document.getElementById("key2").click();
      }
      if (e.key == "3") {
        document.getElementById("key3").click();
      }
      if (e.key == "4") {
        document.getElementById("key4").click();
      }
      if (e.key == "5") {
        document.getElementById("key5").click();
      }
      if (e.key == "6") {
        document.getElementById("key6").click();
      }
      if (e.key == "7") {
        document.getElementById("key7").click();
      }
      if (e.key == "8") {
        document.getElementById("key8").click();
      }
      if (e.key == "9") {
        document.getElementById("key9").click();
      }
      if (e.key == ",") {
        document.getElementById("keydot").click();
      }
      if (e.key == "1") {
        document.getElementById("key1").click();
      }
      if (e.key == "+") {
        document.getElementById("keyadd").click();
      }
      if (e.key == "-") {
        document.getElementById("keysub").click();
      }
      if (e.key == "*") {
        document.getElementById("keymul").click();
      }
      if (e.key == "/") {
        document.getElementById("keydiv").click();
      }
    });
  }
  function handleKey(key) {
    switch (key) {
      case "equ":
        calculate();
        break;
      case "res":
        setScreenValue("");
        setSecondaryScreenValue("");
        break;
      case "mul":
        setSecondaryScreenValue(screenValue + "×");
        setScreenValue("");
        break;
      case "div":
        setSecondaryScreenValue(screenValue + "/");
        setScreenValue("");
        break;
      case "zer":
        if (screenValue !== "0") {
          setScreenValue(screenValue + "0");
        }
        break;
      case "dot":
        if (screenValue === "") {
          setScreenValue("0.");
        } else if (screenValue.includes(".") === false) {
          setScreenValue(screenValue + ".");
        }
        break;
      case "sub":
        setSecondaryScreenValue(screenValue + "-");
        setScreenValue("");
        break;
      case "add":
        setSecondaryScreenValue(screenValue + "+");
        setScreenValue("");
        break;
      default:
        break;
    }
  }

  return (
    <div className="calculatorContainer">
      <div className="calculator">
        <div className="topPart">
          <h1>calc</h1>
          <h5>THEME</h5>
          <ThemeSwitcher
            themeState={themeState}
            setThemeState={setThemeState}
          />
        </div>
        <Screen
          screenValue={screenValue}
          secondaryScreenValue={secondaryScreenValue}
        />
        <div className="keyContainer">
          <Key
            onClick={() => setScreenValue(screenValue + "7")}
            keyText="7"
            className="key key-half key-col1 keyfont2"
            id="key7"
          ></Key>
          <Key
            onClick={() => setScreenValue(screenValue + "8")}
            keyText="8"
            className="key key-half key-col1 keyfont2"
            id="key8"
          ></Key>
          <Key
            onClick={() => setScreenValue(screenValue + "9")}
            keyText="9"
            className="key key-half key-col1 keyfont2"
            id="key9"
          ></Key>
          <Key
            onClick={() => setScreenValue(screenValue.slice(0, -1))}
            keyText="DEL"
            className="key key-half key-col2 keyfont1"
            id="keydel"
          ></Key>
          <Key
            onClick={() => setScreenValue(screenValue + "4")}
            keyText="4"
            className="key key-half key-col1 keyfont2"
            id="key4"
          ></Key>
          <Key
            onClick={() => setScreenValue(screenValue + "5")}
            keyText="5"
            className="key key-half key-col1 keyfont2"
            id="key5"
          ></Key>
          <Key
            onClick={() => setScreenValue(screenValue + "6")}
            keyText="6"
            className="key key-half key-col1 keyfont2"
            id="key6"
          ></Key>
          <Key
            onClick={() => handleKey("add")}
            keyText="+"
            className="key key-half key-col1 keyfont2"
            id="keyadd"
          ></Key>
          <Key
            onClick={() => setScreenValue(screenValue + "1")}
            keyText="1"
            className="key key-half key-col1 keyfont2"
            id="key1"
          ></Key>
          <Key
            onClick={() => setScreenValue(screenValue + "2")}
            keyText="2"
            className="key key-half key-col1 keyfont2"
            id="key2"
          ></Key>
          <Key
            onClick={() => setScreenValue(screenValue + "3")}
            keyText="3"
            className="key key-half key-col1 keyfont2"
            id="key3"
          ></Key>
          <Key
            onClick={() => handleKey("sub")}
            keyText="-"
            className="key key-half key-col1 keyfont2"
            id="keysub"
          ></Key>
          <Key
            onClick={() => handleKey("dot")}
            keyText="."
            className="key key-half key-col1 keyfont2"
            id="keydot"
          ></Key>
          <Key
            onClick={() => handleKey("zer")}
            keyText="0"
            className="key key-half key-col1 keyfont2"
            id="key0"
          ></Key>
          <Key
            onClick={() => handleKey("div")}
            keyText="/"
            className="key key-half key-col1 keyfont2"
            id="keydiv"
          ></Key>
          <Key
            onClick={() => handleKey("mul")}
            keyText="×"
            className="key key-half key-col1 keyfont2"
            id="keymul"
          ></Key>
          <Key
            onClick={() => handleKey("res")}
            keyText="RESET"
            className="key key-full key-col2 keyfont1"
            id="keyreset"
          ></Key>
          <Key
            onClick={() => handleKey("equ")}
            keyText="="
            className="key key-full key-col3 keyfont2"
            id="keyequal"
          ></Key>
        </div>
      </div>

      <style jsx>{`
        @import url("/public/${themeState}.css");
      `}</style>
    </div>
  );
}
