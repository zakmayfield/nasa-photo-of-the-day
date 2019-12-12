import React from 'react';
import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;


  padding: 1rem 3rem;

  background: rgb(255,255,255);
`;


export const DescriptionContainer = styled.div`
  margin: 2vh auto;
  padding: 5rem;

  width: 100%;
  max-width: 900px;
  border-radius: 5px;

  background: whitesmoke;
  box-shadow: 0px 20px 10px -10px;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;