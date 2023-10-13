import Navbar from './components/Navbar'
import Rishabh from './components/Rishabh'
import Ankush from './components/Ankush'
import Home from './components/Home'
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const { user, isAuthenticated  } = useAuth0();
  return (

    <div className='container'>
    <div className="App m-3">
      <Navbar/>
  
     {/*
       isAuthenticated && (  <p className='uupr'>Welcome -  {user.name}</p> )
  */ } 
      {

        isAuthenticated ? ( user.name === "rishabh321@gmail.com" ? <Rishabh/> : <Ankush/> ) : <Home/>

      }
    </div>

    </div>
  );
}

export default App;
