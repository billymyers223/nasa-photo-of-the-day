import React, { useState, useEffect } from 'react';
import "./App.css";
// API WITH KEY https://api.nasa.gov/planetary/apod?api_key=nfrD31fHlr1QNpeqPdgraIlZUUPtz6PukrBcw7IJ
import axios from 'axios';
import NasaPhoto from './NasaPhoto';
import Title from './Title';
import Date from './Date';
import Description from './Description';
import Copyright from './Copyright';

import styled from 'styled-components';


const StyledApp = styled.div`
  background-color:${pr => pr.theme.backgroundColor};
  width:70%;
  display:flex;
  flex-direction:column;
  justify-content:center;

  border-radius: 15px;
  box-shadow: 2px 5px 10px  black;
  border:#293241 4px solid;
  text-align:center;
  height:90vh;
  .center{
    display:flex;
    width:100%;
    justify-content:center;
  }

  @media ${pr => pr.theme.breakPointMobile}{
    width:90%;
    height:auto;
  }

`

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
      <StyledApp>
        <Title pageData={pageData}></Title>
        <Date pageData={pageData}/>
        <NasaPhoto pageData={pageData}/>
        
        <Copyright pageData={pageData}/>
        <div class ='center'>
        <Description pageData={pageData}/>
        </div>
      </StyledApp>
    </section>
  );
}

export default App;
