import "./App.css";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Profile from "./pages/Profile.jsx";
import { gettoken } from "./Localstorage/Store.jsx";

function App() {
  const tokenvalue = gettoken();
  
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={tokenvalue ? <Home /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={tokenvalue ? <Profile /> : <Login />} />
          </Routes>
    </div>
  )

}

export default App;
