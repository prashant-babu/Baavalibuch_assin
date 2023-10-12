const express = require('express')
const fs = require('fs');
const app = express()
const port = 80;

 
const home = fs.readFileSync('./home.html',
  { encoding: 'utf8', flag: 'r' });

  const about = fs.readFileSync('./about.html',
  { encoding: 'utf8', flag: 'r' });

  const services = fs.readFileSync('./services.html',
  { encoding: 'utf8', flag: 'r' });

app.get('/', (req, res) => {
  res.send(home);
})
 app.get('/about',(req,res)=>{
   res.end(about);
 })

 app.get('/services',(req,res)=>{
    res.end(services);
  })


app.listen(port , ()=>{
  console.log(`The application started successfully on port ${port}`);
})