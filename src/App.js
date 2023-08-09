import React from "react";
import Drawer from "./components/Drawer";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import News from "./components/News";
import "./app.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Drawer />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="general"
                country="in"
                category="general"
                style={{ margin: "0 1rem" }}
              />
            }
          ></Route>
          <Route
            exact
            path="business"
            element={<News key="business" country="in" category="business" />}
          ></Route>
          <Route
            exact
            path="entertainment"
            element={
              <News key="entertainment" country="in" category="entertainment" />
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={<News key="general" country="in" category="general" />}
          ></Route>
          <Route
            exact
            path="health"
            element={<News key="health" country="in" category="health" />}
          ></Route>
          <Route
            exact
            path="science"
            element={<News key="science" country="in" category="science" />}
          ></Route>
          <Route
            exact
            path="sports"
            element={<News key="sports" country="in" category="sports" />}
          ></Route>
          <Route
            exact
            path="technology"
            element={
              <News key="technology" country="in" category="technology" />
            }
          ></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
