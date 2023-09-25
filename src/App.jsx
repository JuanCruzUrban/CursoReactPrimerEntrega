
import './App.css'
import NavBar from "./components/Navbar/Navbar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  
  return (
    <>
      <div className='DivPrincipal'>   
      <NavBar/>
      </div>
    <ItemListContainer/>
    </>
    
  )
}

export default App
