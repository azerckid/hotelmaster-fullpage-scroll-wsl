import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullPageScroll from "./FullPageScroll";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<FullPageScroll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
