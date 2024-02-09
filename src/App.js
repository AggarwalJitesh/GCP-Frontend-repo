import Home from "./components/pages/home";
import Login from "./components/pages/Login";
import Signin from "./components/pages/Signin";
import Dashboard from "./components/pages/dashboard";
import style from "./components/pages/style";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/style" element={<style />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
