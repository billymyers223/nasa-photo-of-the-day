import React, { useState, useEffect } from 'react';
import "./App.css";
// API WITH KEY https://api.nasa.gov/planetary/apod?api_key=nfrD31fHlr1QNpeqPdgraIlZUUPtz6PukrBcw7IJ
import axios from 'axios';
import NasaPhoto from './NasaPhoto';
import Title from './Title';
import Date from './Date';
import Description from './Description';
import Copyright from './Copyright';
function App() {
  
//   const photoDetails = id =>{}
const [pageData, setPageData] = useState({});


useEffect(() =>{
  axios.get('https://api.nasa.gov/planetary/apod?api_key=nfrD31fHlr1QNpeqPdgraIlZUUPtz6PukrBcw7IJ')
  .then(res=>{
  setPageData(res.data);
  }).catch(err=>{console.error(err);})
},[]);
  return (
    <section>
      <Title pageData={pageData}/>
      <NasaPhoto pageData={pageData}/>
      <Date pageData={pageData}/>
      <Copyright pageData={pageData}/>
      <Description pageData={pageData}/>

    </section>
  );
}

export default App;
