import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ScreenProvider} from './providers/screenProvider';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { goodTheme } from './pages/theme';
import { ModalProvider } from './providers/modalProvider';


ReactDOM.render(
  <React.StrictMode>
    <ScreenProvider>
      <ThemeProvider theme={goodTheme}>
        <ModalProvider>
          <App />
        </ModalProvider>
      </ThemeProvider>
    </ScreenProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
