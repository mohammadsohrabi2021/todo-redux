import React, { useState } from "react";
import { store, persistor } from "./components/redux/Store";
import { Provider } from "react-redux";
import Form from "./components/Form/Form";
import Card from "./components/Card/Card";
import { PersistGate } from "redux-persist/integration/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/index";
import { ThemeProvider } from "@mui/material";
import theme from "./Theme/theme";
import "./App.css";
import { Grid } from "@mui/material";
function App() {
  const [update, setUpdate] = useState("add");
  const [FormStatus, setFormStatus] = useState({
    id: Math.floor(Math.random() * 1000),
    title: "",
    description: "",
    state: false,
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Card setUpdate={setUpdate} setFormStatus={setFormStatus} />,
        },
        {
          path: "/Form",
          element: (
            <Form
              update={update}
              setUpdate={setUpdate}
              FormStatus={FormStatus}
              setFormStatus={setFormStatus}
            />
          ),
        },
      ],
    },
  ]);
  return (
    <Grid>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </Grid>
  );
}

export default App;
