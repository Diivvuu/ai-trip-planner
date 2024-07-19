import { useState } from "react";
import { Accordion } from "./components/ui/accordion";
import { Button } from "./components/ui/button";
import Hero from "./components/custom/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
    </>
  );
}

export default App;
