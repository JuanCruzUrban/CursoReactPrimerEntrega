
import './App.css'
import NavBar from "./components/Navbar/Navbar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" 
import Home from './pages/Home'
import Contacto from './pages/Contacto'
import About from "./pages/About"


function App() {
  
  return (
    <>
      <div className='DivPrincipal'>   
      <NavBar/>
      <Router>   
<Routes>
<Route path='/' element ={<Home/>}/>
<Route path='/Contacto' element ={<Contacto/>}/>
<Route path='/About' element ={<About/>}/>
</Routes>
</Router>
   </div>
    
 <ItemListContainer/>
    </>
    
  )
}

export default App
