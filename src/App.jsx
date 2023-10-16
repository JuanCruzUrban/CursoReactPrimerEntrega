
import './App.css'
import NavBar from "./components/Navbar/Navbar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" 
import Home from './pages/Home'
import Contacto from './pages/Contacto'
import About from "./pages/About"
import DetailPage from "./pages/DetailPage"

function App() {
  
  return (
    <>
     <Router>
      <div className='DivPrincipal'>   
      <NavBar/>
        
<Routes>
<Route path='/' element ={<Home/>}/>
<Route path='/Contacto' element ={<Contacto/>}/>
<Route path='/About' element ={<About/>}/>
<Route path='/DetailPage :id'  element ={<DetailPage/>}/>
</Routes>
</div>   
</Router>
 <ItemListContainer/>
 

    </>
    
  )
}

export default App
