import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto";
import DetailPage from "./pages/DetailPage";
import Header from "./components/Header/Header";
import Percussion from "./pages/Percussion";
import Cord from "./pages/Cord";
import Formulario from "./components/Formulario/Formulario";
const App = () => {
  

  return (
    <>
      <Router>
        <Header />
        <NavBar />
        <div className="DivPrincipal">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<DetailPage />} />
           <Route path="/percussion" element={<Percussion />} /> 
           <Route path="/cord" element={<Cord/>} />
           <Route path="/Contacto" element={<Contacto/>} />
           <Route path="/Formulario" element={<Formulario/>} />

          </Routes>
          
          </div>
    
      </Router>
    </>
  );
};

export default App;
