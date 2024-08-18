import { useState } from "react";
import "./App.css";
import Birthday from "./components/Birthday";
import BottomNav from "./components/BottomNav";
import { EmblaCarousel } from "./components/imageSlider";

function App() {
  return (
    <>
      <Birthday />
      <BottomNav />
    </>
  );
}

export default App;
