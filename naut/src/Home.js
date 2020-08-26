import React, { useEffect } from "react";
import { TitleComponent } from "./components/titleComponent.js";
import "./App.css"


require("dotenv").config();

function Home(props) {



  return (
    <div className="Home">
        <TitleComponent />
        <h1> SQUADIFY </h1>
    </div>
  );
}

export default Home;
