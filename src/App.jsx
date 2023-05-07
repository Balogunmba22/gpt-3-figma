import React from "react";
import "./App.css";

import { Cta, Brand, Navbar } from "./components";
import {
  Blog,
  Features,
  Hero,
  Footer,
  Possibility,
  WhatGPT3,
} from "./containers";

export default function App() {
  return (
    <main>
      <div className="gradient__bg">
        <Navbar />
        <Hero />
      </div>
      <div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </main>
  );
}
