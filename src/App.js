import React from 'react';
import { AppRoutes } from './routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './redux/reducers'

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div style={{height:"100vh"}}>
          <AppRoutes />
      </div>
    </Provider>
  );
}

export default App;
