import Navbar from './components/Navbar'
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user , loginWithRedirect , isAuthenticated , logout } = useAuth0();
  return (
    <div className="App">
      <Navbar/>
  
     {
       isAuthenticated && (  <p>Welcome -  {user.name}</p> )
     }

    </div>
  );
}

export default App;
