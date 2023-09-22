
import './App.css'
import NavBar from "./components/Navbar/Navbar"
import Header from './components/Header/Header';
import CardUser from './components/CardUser/CardUser';
function App() {
  
  return (
    
      <div className='DivPrincipal'>
        <Header/>
      <NavBar/>
      
      
      <div className='DivSecundario'>
        <CardUser
        
        name="Juan Cruz"
        
        
        />
      </div>
      </div>
    
  )
}

export default App
