import { useState } from "react";
import DarkTheme from "./DarkTheme";

// 1.
//Set the button color: inherit so it inherits the color of the body
//Set the toggle button to change the state
// Creating a variable in CSS for styles for dark/light theme
// Create a component for DarkTheme. and use it if darkTheme state is true

// 3. loadDarkMode() as the argument for useState()
//loadDarkMode() will check if localStorage method exist. We need to know this becase this method only exists in the browser and in the server run by node.js it will return 'undefined'. If it does not exist return 'false'

// 4. If localStorage exists, we will search by the key 'darkMode' that we created with localStorage.setItem. Then we check if the value is empty (means in the UI we have used it yet/maybe our first time). If we set our preference in the UI and there is value for 'darkMode' in the localStorage, then we set it as a value to the useState()

function loadDarkMode() {
  if (typeof localStorage === "undefined") {
    return false;
  }

  const value = localStorage.getItem("darkMode");
  if (value === null) {
    return false;
  } else {
    return JSON.parse(value);
  }
}

// 2.handleClick
// localStorage.setItem:
// Once we click on handClick it will revert the boolean value of 'darkmode' state: true <-> false. We will create a new key = 'darkMode' and assign the value for it equal to !darkMode. Since localStorage.setItem only accepts string, we need to stringfy it into a string
// Will also  change the state.
function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(loadDarkMode);

  const handleClick = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };

  const text = darkMode ? "Light Mode" : "Dark Mode";
  console.log("[ThemeSwitch] darkMode:", darkMode);


// Style jsx will applied first
// We are creating a DarkTheme component to render global css style jsx and import it here because we can't do it conditional rendering for style jsx.
//If darkMode is true, we re-apply the styling to DarkTheme
//We get the warnings and need to use this 'suppressHydrationWarning', because when the page is pre-rendered, the darkMode = false and in the client it is saved in the localStorage as darkMode = true, so there is a mismatch between server and client => next will show warnings.

  return (
    <>
      <button onClick={handleClick} suppressHydrationWarning>{text}</button>
      <style jsx>{`
        button {
          background: none;
          border: none;
          cursor: pointer;
          color: inherit;
        }
      `}</style>

      {darkMode && <DarkTheme />}
    </>
  );
}

export default ThemeSwitch;
