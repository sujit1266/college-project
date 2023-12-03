import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import LoginSignUp from "./Pages/LoginSignUp";
import Login from "./Pages/Login";

const App = () => {
  return (
    <Router>
      <div className="home">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<LoginSignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
