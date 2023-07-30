import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Popular from "./Popular";
import TopRated from "./TopRated";
import UpComing from "./UpComing";
import Details from "./Details";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="popular" element={<Popular />}></Route>        
        <Route path="upcoming" element={<UpComing />}></Route>
        <Route path="details/:id" element={<Details/> }></Route>
        <Route path="rated" element={<TopRated />}></Route>
      </Routes>
    </div>
  );
};

export default App;
