
import './App.css'
import NavBar from "./components/Navbar/Navbar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" 
import Contacto from './pages/Contacto'
import About from "./pages/About"
import DetailPage from "./pages/DetailPage"
import Header from './components/Header/Header'

function App() {
  
  return (
    <>
   
<Router>
<Header/>
<NavBar/>
<div className='DivPrincipal'>   

        
<Routes>
<Route path='/' element ={<ItemListContainer/>}/>
<Route path='/Contacto' element ={<Contacto/>}/>
<Route path='/About' element ={<About/>}/>
<Route path='/DetailPage/:id'  element ={<DetailPage/>}/>
</Routes>
</div>   
</Router>
 
 

    </>
    
  )
}

export default App
