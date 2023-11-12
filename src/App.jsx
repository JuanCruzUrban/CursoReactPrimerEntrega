import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto";
import About from "./pages/About";
import DetailPage from "./pages/DetailPage";
import Header from "./components/Header/Header";
import Category from "./pages/Category";
// import { db } from "./firebase/firebaseConfig";
// import { collection, query, getDocs } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import CardInstrument from "./components/CardInstruments/CardInstruments";
const App = () => {
  // const [instruments, setInstruments] = useState([]);

  // useEffect(() => {
  //   const getInstrumentos = async () => {
  //     const q = query(collection(db, "instrumentos"));
  //    const docs = []
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //        docs.push({...doc.data(), id: doc.id})
  //     });
  //     setInstruments(docs)
  //   };
  //   getInstrumentos();
  // }, []);

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
            <Route path="/category/:categoryId" element={<Category />} />
          </Routes>
          </div>
      
      </Router>
    </>
  );
};

export default App;
