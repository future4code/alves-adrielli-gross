import React from 'react';
import styled from 'styled-components';
import first from "./components/first";
import second from './components/second';
import third from './components/third';
import fourth from './components/fourth';





const TextStyle = styled.h2`
  text-transform: 'uppercase',
  font-family: 'Cambria'
`;


export default class App extends React.Component {
  render() {  
    return ( 
        <>
        <first/>
        
        </>
    )
}
}