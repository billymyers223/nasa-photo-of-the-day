import "./App";
import React from 'react';
import styled from 'styled-components'
const StyledApp = styled.div`
h4{
  display:flex;
  justify-content:center;
  flex-direction:row;
  margin-top:-25px;
}
  `

const Display = (props)=>{

return(
    <StyledApp>
        <h4> {props.pageData.date}</h4>
    </StyledApp>
)

};
export default Display;