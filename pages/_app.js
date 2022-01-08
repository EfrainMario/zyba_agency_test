import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { themeApp } from '../src/theme';
import { CssBaseline } from '@material-ui/core';

function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
      <ThemeProvider theme={themeApp}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
