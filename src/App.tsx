import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  Gallery,
  Home,
  Program,
  ProgramsDetails,
} from "./routes";
import { NavBar } from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Program />} />
          <Route path="/program/:programSlug" element={<ProgramsDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
