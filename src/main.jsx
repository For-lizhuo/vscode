import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import {GlobalStyle} from './style';
import App from './components/App';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle/>
        <App/>  
    </Provider>
  </React.StrictMode>,
)
