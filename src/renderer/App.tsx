import { useEffect } from "react";
import { MemoryRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./global.css";

function GOTO() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, [navigate]);
  return null;
}

export default function App() {
  return (
    <Router>
      <GOTO />
      <Routes>
        <Route path="/" element={<div />} />
      </Routes>
    </Router>
  );
}
