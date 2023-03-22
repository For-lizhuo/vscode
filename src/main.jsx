import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { enableMapSet } from 'immer';
import {GlobalStyle} from './style';
import App from './components/App';
import store from './store';

enableMapSet();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle/>
        <App/>  
    </Provider>
  </React.StrictMode>,
)
