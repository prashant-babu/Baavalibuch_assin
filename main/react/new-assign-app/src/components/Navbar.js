import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
    const { user , loginWithRedirect , isAuthenticated , logout } = useAuth0();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="">Baavalibuch</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Features</a>
        </li>

        <li>
            {
                isAuthenticated && (<p  className='uupr m-2' > Welcome - {user.name}</p>)
            }
        </li>
    

       {
           
           isAuthenticated ? (<li><button className='btn btn-danger mx-2' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
           Log Out
         </button></li> )
         : (<li><button className='btn btn-primary mx-2' onClick={() => loginWithRedirect()}>LogIn / SignUp</button></li>)

        }
        


   
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
