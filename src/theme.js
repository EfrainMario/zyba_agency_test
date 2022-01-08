import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';


const theme = createTheme({
  // shadows: ["none"],
  typography: {
    htmlFontSize: 16,
    fontFamily: [
      'Mulish',
      'sans-serif',
    ].join(','),
  },
  palette: {
    type: "light",
    primary: {
      light: '#5da7f0',
      main: '#3591ED',
      dark: '#2565a5',
      contrastText: '#fff',
    },
    secondary: {
      light: '#4d4d4d',
      main: '#212121',
      dark: '#171717',
      contrastText: '#fff',
    },
    background: {
      paper: '#fff',
      default: '#fff'
    }
  },
  props: {
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!,
    },
    MuiButton: {
      disableElevation: true,
      // disableRipple: true

    }
  },
  // components: {
  //   // Name of the component
  //   MuiButtonBase: {
  //     // defaultProps: {
  //       // The props to change the default for.
  //       disableRipple: true, // No more ripple!
  //     // },
  //   },
  //   MuiButton: {
  //     disableElevation: true,
  //   }
  // },
  overrides: {

    MuiButton: {

      root: {
        boxShadow: 'none',
        fontSize: 12,
        lineHeight: 1.5,
        borderColor: '#007bff',
        borderRadius: 8,
        paddindTop: 8 * 2,
        paddindBottom: 8 * 2,
        '&:hover': {
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
  },
});

export const themeApp = responsiveFontSizes(theme);