import React, { useState } from 'react';
import { store, persistor } from './components/redux/Store';
import { Provider } from 'react-redux';
import Form from './components/Form/Form';
import Card from './components/Card/Card';
import { PersistGate } from 'redux-persist/integration/react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/index"
import './App.css'
function App() {
  const [update, setUpdate] = useState('add')
  const [FormStatus, setFormStatus] = useState({
      id: Math.floor(Math.random() * 1000),
      title: '',
      description: '',
      state: false
  })
  
  const router = createBrowserRouter([

    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path: "/",
                element: <Card  setUpdate={setUpdate} setFormStatus={setFormStatus} />,
            },
            {
                path: "/Form",
                element: <Form update={update} setUpdate={setUpdate} FormStatus={FormStatus} setFormStatus={setFormStatus}/>,
            },  
             
        ]
    }
    
]);
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
