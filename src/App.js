

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage'
import SinglePage from "./Pages/SinglePage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/product/:id" element={<SinglePage />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
