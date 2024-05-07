import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Registration from "./pages/Registration";
import Success from "./assets/Success";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
