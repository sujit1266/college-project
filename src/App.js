import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignUp from "./Pages/LoginSignUp";
import Navbar from "./components/Navbar";
import Herosection from './components/herosection';
import Timerpage from "./Pages/Timer";
import Login from "./Pages/Login"



const App = () => {
     return (
          <Router>
               <div className="home">
                    <Navbar />
                    <Routes>
                         <Route path="/" element={<Herosection />} />
                         <Route path="/timer" element={<Timerpage />} />
                         <Route path="/signup" element={<LoginSignUp />} />
                         <Route path="/login" element={<Login />} />
                    </Routes>
               </div>

          </Router>
     )
}
