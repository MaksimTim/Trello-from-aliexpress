import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import CardPage from "./routes/card-page/card.page.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card/:key" element={<CardPage />} />
    </Routes>
  );
}

export default App;
