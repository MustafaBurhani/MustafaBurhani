import { Provider } from 'react-redux';
import store from './store/store';

import { createRoot } from 'react-dom/client';
import './index.scss';

import App from './App.jsx';
import { StrictMode } from 'react';


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </StrictMode>
)
