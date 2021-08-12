import "./App";
import React from 'react';
import styled from 'styled-components'
const StyledApp = styled.div`
h3{
  display:flex;
  justify-content:center;
  flex-direction:row;
  font-size:1.8em;
}
  `

const Display = (props)=>{

return(
    <StyledApp>
    <>
    <h3>{props.pageData.title}</h3>
    </>
    </StyledApp>
)

};
export default Display;