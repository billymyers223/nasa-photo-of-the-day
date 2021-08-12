import "./App";
import React from 'react';
import styled from 'styled-components';


const StyledApp = styled.div`
img{
  background-color:${pr => pr.theme.backgroundColor};
  width:70%;
  height:60vh;
  diplay:flex;
  justify-content:center;
  align-items:center;
  border-radius: 15px;
  box-shadow: 2px 5px 10px  black;
  margin-top:-15px;
  border:${pr => pr.theme.white} 3px solid;
}
  `
const Display = (props)=>{



return(
    <StyledApp>
        <img src={props.pageData.url} alt='NASA POFTD'></img>
    </StyledApp>
)

};
export default Display;