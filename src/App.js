import React from "react";
import Index from "./layouts/admin/Index";
import { useLocation } from "react-router-dom";
import AuthLayout from "./layouts/auth/authLayout";

function App() {

  const location = useLocation()

  return (
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
  );
}

export default App;
