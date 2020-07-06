import React from "react";

const themes = {
  dark: {
    background: "#010A1E",
    text: {
      primary: "#FCFCFC",
      secondary: "#E7DADF",
    },
    accent: {
      primary: "#ED4253",
      secondary: "#37A6F3",
    },
    shades: {
      primary: "#7C818D",
      secondary: "#2A2D34",
    },
  },
  light: {
    background: "#FCFCFC",
    text: {
      primary: "#010A1E",
      secondary: "#2A2D34",
    },
    accent: {
      primary: "#ED4253",
      secondary: "#37A6F3",
    },
    shades: {
      primary: "#7C818D",
      secondary: "#E7DADF",
    },
  },
};

const ThemeContext = React.createContext(themes.dark);

interface ThemeContext {
  background: string;
  text: {
    primary: string;
    secondary: string;
  };
  accent: {
    primary: string;
    secondary: string;
  };
  shades: {
    primary: string;
    secondary: string;
  };
}

export default ThemeContext;
