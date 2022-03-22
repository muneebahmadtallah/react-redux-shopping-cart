//feature 1

import {Provider} from "react-redux";
import store from "./store/reducers";
import "./App.css";
import Nav from "./Nav";
import Detail from "./Detail";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/detail" element={<Detail />} />
          <Route exact path="/detail/:id" element={<Detail />} />
        </Routes>
      </Provider>
    </BrowserRouter>
    // <Home/>
  );
}

export default App;
