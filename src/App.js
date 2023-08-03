import Home from "./components/pages/home";
import Upload from "./components/pages/upload";
import Login from "./components/pages/Login";
import About from "./components/pages/About";
import Dashboard from "./components/pages/dashboard";
import Example from "./components/pages/example";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />\
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
