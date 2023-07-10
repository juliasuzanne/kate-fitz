import { Header } from "./Header";
import { Home } from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChangeMachine } from "./ChangeMachine";
import "./App.css";
import { Landing } from "./Landing";
import { Contact } from "./Contact";
import { Login } from "./Login";
import { Slide } from "./Slide";
import { SearchFilter } from "./SearchFilter";
function App() {
  return (
    <div className="home">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/slide" element={<Slide />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/changemachine" element={<ChangeMachine />} />
          <Route path="/login" element={<Login />} />
          <Route path="/filter" element={<SearchFilter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
