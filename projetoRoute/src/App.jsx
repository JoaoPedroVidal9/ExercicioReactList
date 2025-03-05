import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import CreateEvent from "./pages/Create";
import Org from "./pages/Org";
import Ingr from "./pages/Ingr";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/criar" element={<CreateEvent/>} />
        <Route path="/org" element={<Org/>} />
        <Route path="/ingr" element={<Ingr/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
