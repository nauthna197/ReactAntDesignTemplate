import React from "react";

import "antd/dist/antd.css";
import "./index.css";
import { BrowserRouter, Switch } from "react-router-dom";
import MainPage from "./components/main-page/MainPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <div className="App">
          <MainPage></MainPage>
        </div>
    </BrowserRouter>
  );
};

export default App;
