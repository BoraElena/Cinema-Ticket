import Navbar from "./Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import Ticket from "./Pages/Ticket/Ticket";
import Login from "./Pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Ticket" element={<Ticket />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}
export default App;
