import "./App";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Display = ()=>{
    const [pageData, setPageData] = useState({});


    useEffect(() =>{
      axios.get('https://api.nasa.gov/planetary/apod?api_key=nfrD31fHlr1QNpeqPdgraIlZUUPtz6PukrBcw7IJ')
      .then(res=>{
      setPageData(res.data);
      }).catch(err=>{console.error(err);})
  },[]);


return(
    <h4>{pageData.date}</h4>
)

};
export default Display;