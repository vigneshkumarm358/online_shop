import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProducts from "./pages/AddProducts";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
 import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="px-2">
      <ToastContainer />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<AddProducts />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
