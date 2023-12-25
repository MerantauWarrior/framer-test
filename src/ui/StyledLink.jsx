import React from 'react';
import styled from 'styled-components'

export const StyledLinkWrapper = styled.div`
  display:flex;
  justify-content:center;
  gap: 16px;
  padding: 12px;
  background-color: lightcoral;
`
export const StyledLink = styled.div`
  padding: 4px 12px;
  background-color: cornflowerblue;
  color: cornsilk;
  font-size: 1.2em;
  
  .active &{
    background-color: cornsilk;
    color: cornflowerblue;
  }
`
