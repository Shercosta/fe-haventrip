import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import { DestinationPage } from "./pages/Destination";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* dynamic route */}
      <Route path="/destination/:id" element={<DestinationPage />} />
    </Routes>
  );
}

export default App;
