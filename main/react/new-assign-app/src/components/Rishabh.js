import React from 'react'
import {useState} from "react";
import axios from "axios";


export default function Rishabh() {
  const [friends , setFriends] = useState([]);

  function getFriends() {
    axios({
        method: "GET",
        url:"http://127.0.0.1:8000/api/friend",
      }).then((response)=>{
        const data = response.data
        setFriends(data);
        console.log(data);
      }).catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
          }
      })}

      getFriends();
/*
     const handle = (event)=>{
        setFriends(event.target.value);
       }
*/


       const addd = ()=>{
      
        alert("are you sure ?")
        console.log("nnn")
        const data1 = document.getElementById('second').value
        const data2 = "Rishabh Rana"
        if(data2 !== ""){
        axios.post('http://127.0.0.1:8000/api/friend', {
        firstfriend: data1,
        secondfriend: data2
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
       
       }

  return (

  <>
  <div className='container homii'>
  <div className="container mb-3 ">
  
  <br/>
  <br/>
  <div className='formii'>
  <input className='p-2' type="text" id="second" name="second" value={friends.firstfriend} placeholder='Add a new Friend'/>
  <button className="btn btn-primary" onClick={addd} >Add Frind</button>
  </div>
 
  </div>
 
   <br/>
   <br/>

     <h2>Your Friend's List - </h2>
     <hr/>
     {
        friends.map((friend,i)=>{

          return(
            <h2 className='list' key={i} >  {friend.firstfriend} </h2>
          
          )
        })
      }
      </div>
  </>
  )
}
