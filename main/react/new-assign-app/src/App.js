import Navbar from './components/Navbar'
import Rishabh from './components/Rishabh'
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const { user, isAuthenticated  } = useAuth0();
  return (
    <div className="App">
      <Navbar/>
  
     {
       isAuthenticated && (  <p>Welcome -  {user.name}</p> )
     }
      {
        isAuthenticated && ( <Rishabh/> )
      }
    </div>
  );
}

export default App;
