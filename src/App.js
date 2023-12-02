import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
// import Loginpage from "./components/LoginSignUp/loginpage2";
import LoginSignUp from "./Pages/LoginSignUp";
const App = () => {
     return (
          <Router>
               <div>
                    <Routes>
                         <Route path="/" element={<Main />} />
                         <Route path="/login" element={<LoginSignUp/>}/>
                    </Routes>
               </div>
          </Router>
     )
}


export default App;