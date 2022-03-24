//feature 1

import "./App.css";
import Nav from "./Nav";
import Detail from "./Detail";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/detail" element={<Detail />} />
          <Route exact path="/detail/:id" element={<Detail />} />
        </Routes>
    </BrowserRouter>
    // <Home/>
  );
}

export default App;
