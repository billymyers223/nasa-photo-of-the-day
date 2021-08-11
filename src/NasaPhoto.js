import "./App";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Display = ()=>{
    const [pageData, setPageData] = useState({});


    useEffect(() =>{
      axios.get('https://api.nasa.gov/planetary/apod?api_key=nfrD31fHlr1QNpeqPdgraIlZUUPtz6PukrBcw7IJ')
      .then(res=>{
      setPageData(res.data);
        console.log(res.data)
        console.log(pageData);
      }).catch(err=>{console.error(err);})
  },[]);


return(
    <img src={pageData.url} alt='NASA POFTD'></img>
)

};
export default Display;