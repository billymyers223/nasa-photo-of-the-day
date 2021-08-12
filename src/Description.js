import "./App";
import React from 'react';
import styled from 'styled-components'
const StyledApp = styled.div`
    width:95%;

    margin-top:-30px;
    
  
  `

const Display = (props)=>{
return(
    <StyledApp>
    <div>
    <p>{props.pageData.explanation}</p>
    </div>
    </StyledApp>
)

};
export default Display;