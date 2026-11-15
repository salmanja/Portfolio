import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    section: string;
  }
  interface Palette {
    hover: {
      primary: string;
      secondary: string;
    }
  }
  interface PaletteOptions {
    hover?: {
      primary?: string; 
      secondary?: string;
    }
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
      overlay: {
        background:string;
      }
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
      overlay?: {
        background?:string;
      }
    };
  }
}

export const theme = createTheme({
  palette: {
    //accents
    primary: {
      main: "#416B8B",
    },
    secondary: {
      main: "#0e73c0",
    },
    background: {
      default: "#FCFAF6",
      paper: "#FCFAF6",
      section: "#EAF1F5",
    },
    text: {
      primary: "#353E43",
      secondary: "#68747A",
    },
    divider: "#E3E0D9",
    hover: {
      primary: "#263F52",
      secondary: "#F8FAFC",
    },
  },
  typography: {
    fontFamily: "'Space Grotesk', sans-serif",
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
      stopText: "#354341",
      stopFont: "'Press Start 2P', sans-serif",
    },
    navigation: {
      background: "#F3EBD9",
      text: "#228B22",
      border: "#B9A98C",
      fontFamily: "'VT323', sans-serif",
    },
    overlay: {
      background: "rgba(20,30,35,0.45)",
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          border: `1px solid ${theme.palette.divider}`,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
        }),
      },
    },
  },
});
