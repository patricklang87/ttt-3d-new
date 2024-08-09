import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { SocketProvider } from './contexts/socketProvider';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <SocketProvider>
      <Provider store={store} >
        <App />
      </Provider>
    </SocketProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

