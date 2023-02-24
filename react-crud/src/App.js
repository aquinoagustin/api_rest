import { BrowserRouter,Route,Routes } from "react-router-dom";
import "./App.css";
import ComputerForm from "./Components/ComputerForm";
import ComputerList from "./Components/ComputerList";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<ComputerList/>}/>
            <Route path="/computerForm" element={<ComputerForm/>}/>
            <Route path="/updateComputer/:id" element={<ComputerForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
