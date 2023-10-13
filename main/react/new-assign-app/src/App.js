import Navbar from './components/Navbar'
import Home from './components/Home'
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user , isAuthenticated  } = useAuth0();
  return (
    <div className="App">
      <Navbar/>
  
     {
       isAuthenticated ? (  <p>Welcome -  {user.name}</p> ) : ( <Home/> )
     }

    </div>
  );
}

export default App;
