import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { theme } from './styles/theme.js';
import { GlobalStyle } from './styles/GlobalStyles.jsx';
import { ThemeProvider } from 'styled-components';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ThemeProvider>
  </StrictMode>
);
