import React from 'react';
import { store, persistor } from './components/redux/Store';
import { Provider } from 'react-redux';
import Home from './components/Home/Home';
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Home />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
