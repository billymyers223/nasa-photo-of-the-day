import "./App";
import React from 'react';
import styled from 'styled-components'
const StyledApp = styled.div`
    margin-top:-10px;
    opacity:80%;
  `

const Display = (props)=>{
return(
    <StyledApp>
    <p class = 'copyright'>Taken by {props.pageData.copyright}</p>
    </StyledApp>
)

};
export default Display;