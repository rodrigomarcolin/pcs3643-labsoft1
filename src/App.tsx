import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Layout from "./components/Layout";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import Home from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route element={<AuthenticatedRoute />}>
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );
};

export default App;
