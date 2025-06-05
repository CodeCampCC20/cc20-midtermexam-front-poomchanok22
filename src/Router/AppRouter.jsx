import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "../Layout/MainLayout";
import ToDoPage from "../Pages/ToDoPage";
import Register from "../Pages/Register";
import LoginPage from "../Pages/LoginPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ToDoPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
