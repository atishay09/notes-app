import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Alert from "./components/Alert";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Notestate from "./context/notes/NoteState";

const App = () => {
  const [alert,setAlert] = useState(null);
  const showAlert = (msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }
  return (
    <>
    <Notestate>
      <BrowserRouter>
        <Navbar showAlert={showAlert}/>
        <Alert alert={alert}/>
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home showAlert={showAlert}/>}></Route>
          <Route exact path="/about" element={<About showAlert={showAlert}/>}></Route>
          <Route exact path="/login" element={<Login showAlert={showAlert}/>}></Route>
          <Route exact path="/signup" element={<Signup showAlert={showAlert}/>}></Route>
        </Routes>
        </div>
      </BrowserRouter>
      </Notestate>
    </>
  );
};


export default App;
