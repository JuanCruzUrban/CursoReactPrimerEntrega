import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import Header from "./components/Header/Header";
import Percussion from "./pages/Percussion";
import Cord from "./pages/Cord";
import ShopPage from "./components/ShopPage/ShopPage";
import { CartContextProvider} from "./context/ItemsContext";

const App = () => {
 
  return (
    <>
    <CartContextProvider.Provider>
      <Router>
        <Header />
        <NavBar />

        <div className="DivPrincipal">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/percussion" element={<Percussion />} />
            <Route path="/cord" element={<Cord />} />
            <Route path="/shoppage" element={<ShopPage />} />
          </Routes>
        </div>
      </Router>
      </CartContextProvider.Provider>
    </>
  );
};

export default App;
