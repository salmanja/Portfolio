import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    section: string;
  }
  interface Theme {
    custom: {
      world: {
        stopBackground: string;
        stopText: string;
        stopFont: string;
      };
      navigation: {
        background: string;
        text: string;
        border: string;
        fontFamily: string;
      };
    };
  }
  interface ThemeOptions {
    custom?: {
      world?: {
        stopBackground?: string;
        stopText?: string;
        stopFont?: string;
      };
      navigation?: {
        background?: string;
        text?: string;
        border?: string;
        fontFamily?: string;
      };
    };
  }
}

export const theme = createTheme({
  palette: {
    //accents
    primary: {
      main: "416B8B",
    },
    background: {
      default: "#FCFAF6",
      paper: "#FCFAF6",
      section: "EAF1F5",
    },
    text: {
      primary: "#353E43",
      secondary: "#68747A",
    },
    divider: "#E3E0D9",
  },
  typography: {
    fontFamily: "Space Grotesk, sans-serif",
    h4: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
  },
},
  custom: {
    world: {
        stopBackground: "#F3EBD9",
        stopText: "#353E43",
        stopFont: "Press Start 2P, sans-serif",
    },
    navigation: {
        background: "#F3EBD9",
        text: "#353E43",
        border: "#B9A98C",
        fontFamily: "VT323, sans-serif",
    },
  },
  spacing: 8,
});
