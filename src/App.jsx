import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto";
import About from "./pages/About";
import DetailPage from "./pages/DetailPage";
import Header from "./components/Header/Header";
import Percussion from "./pages/Percussion";
import Cord from "./pages/Cord";

const App = () => {
  

  return (
    <>
      <Router>
        <Header />
        <NavBar />
        <div className="DivPrincipal">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/About" element={<About />} />
            <Route path="/detail/:id" element={<DetailPage />} />
           <Route path="/percussion" element={<Percussion />} /> 
           <Route path="/cord" element={<Cord/>} />
          </Routes>
          </div>
      
      </Router>
    </>
  );
};

export default App;
