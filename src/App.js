import './App.css';
import {Route, Routes, Navigate} from "react-router-dom"


import Home from "./components/Home"

function App() {

  return (
  <Routes>
      <Route path="/" element={<Navigate to="/coin/bitcoin" />} />
      <Route path="/coin/:coin" element={<Home />} />
    </Routes>
  )

}

export default App;
