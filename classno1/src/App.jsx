



import { Nav } from "./Components/Nav";
import React from "react";
import "./App.css";
import { Img } from "./Components/Image";
import { Card } from "./Components/Card";
import { Footer } from "./Components/Footer"

const App = () => {
  return (
    <div>
      <Nav />
      <Img />
      <Card />
      <Footer />
    </div>

  )
}

export default App;