import React from "react";
import Index from "./layouts/admin/Index";
import { useLocation } from "react-router-dom";
import AuthLayout from "./layouts/auth/authLayout";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {

  const location = useLocation()

  return (
    <Provider store={store}>
    <div className="App">
      {
        location.pathname.includes('/auth') ? (
        <AuthLayout/>
      )
        : (
        <Index/>
      )
      }
    </div>
    </Provider>
  );
}

export default App;
