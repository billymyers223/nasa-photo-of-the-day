import React from "react";
import "./App.css";
// API WITH KEY https://api.nasa.gov/planetary/apod?api_key=nfrD31fHlr1QNpeqPdgraIlZUUPtz6PukrBcw7IJ

import NasaPhoto from './NasaPhoto';
import Title from './Title';
import Date from './Date';
import Description from './Description';
import Copyright from './Copyright';
function App() {

  
//   const photoDetails = id =>{}
//   useEffect(() =>{
//     axios.get('https://api.nasa.gov/planetary/apod?api_key=nfrD31fHlr1QNpeqPdgraIlZUUPtz6PukrBcw7IJ')
//     .then(res=>{
//     // console.log(res);
//     setPageData(res.data);
//       console.log(res.data)
//       console.log(pageData);
//     }).catch(err=>{console.error(err);})
// },[]);
  return (
    <section>
      <Title/>
      <NasaPhoto/>
      <Date/>
      <Copyright/>
      <Description/>

    </section>
  );
}

export default App;
