import React, { Component }  from 'react';
import logo from './logo.svg';
import star  from './images/iconstar.svg';
import thanks from "./images/illustrationthankyou.svg"
import './App.css';
import styled, { css } from 'styled-components'
import { device } from "./device";
import { useState } from "react"



const Box = styled.div`
  width: 40%;
  height: 50%;
  background: linear-gradient(180deg,hsl(214, 17%, 16%),hsl(215, 23%, 14%));
  /* Center horizontally*/
  margin: 0 auto;
  border-radius: 30px;
  padding: 30px;

  @media ${device.mobileXS} {
   
    width: 80%;
  }
  @media ${device.mobileS} {
   
    width: 80%;
  }
  
  @media ${device.mobileM} {
    
    width: 80%;
  }
  @media ${device.mobileL} {
    width: 80%;
  }
  @media ${device.tabletS} {
    width: 40%;
    }
  @media ${device.tabletM} {
      width: 40%;
    }
  
  @media ${device.tabletL} {
      width: 40%;
    }

  
`
const Circle = styled.div`
width: 30px;
height: 30px;
background-color: rgb(55 65 81);
border-radius: 100%;
display: flex;
align-items: center;
`
const P = styled.p`
textAlign: initial;
font-size: 15px !important;
font-weight: 400;
@media ${device.mobileXS} {
   
  font-size: 11px !important;
}
@media ${device.mobileS} {
 
  font-size: 15px !important;
}

@media ${device.mobileM} {
  font-size: 14px !important;
 
}


`
const styleSVG = {
  display: "block",
  margin: "0 auto",
  textAlign: "center"
}

const ContainerPuntation =styled.ul `
  display: block;
  text-align: center;
  margin: 0 auto;
  color: hsl(0, 0%, 100%);
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
const CirclePuntation = styled.li`
width: 40px;
height: 40px;
background-color: rgb(55 65 81);
border-radius: 100%;
display: flex;
align-items: center;
margin-right: 10px;
float: left;
&:hover {
  background-color: hsl(25, 97%, 53%);
}

&:focus {     
  background-color:yellow;    
}


@media ${device.mobileXS} {
  width: 22px;
  height: 22px;

}
@media ${device.mobileS} {
  width: 32px;
  height: 32px;

}

@media ${device.mobileM} {
  width: 36px;
  height: 36px;

}
@media ${device.mobileL} {
  width: 39px;
  height: 39px;

}
@media ${device.tabletS} {
    
  width: 38px; 
  height: 38px;
  }
@media ${device.tabletM} {
    
  width: 42px; 
  height: 42px;
  }

@media ${device.tabletL} {
    
  width: 46px; 
  height: 46px;
  }

    @media ${device.laptopS} {
    
      width: 40px; 
      height: 40px;
      }

    @media ${device.laptopM} {
    
      width: 40px; 
      height: 40px;
      }

      
  
  @media ${device.laptopL} {
    
    width: 40px; 
    height: 40px;
    }

  @media ${device.desktop} {
    
    width: 40px; 
    height: 40px;
    }
   

  


`

const Button = styled.button `
    align-items: center;
    appearance: none;
    background-clip: padding-box;
    border-style: none;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    flex-direction: row;
    flex-shrink: 0;
    font-size: 16px;
    font-weight: 700;
    justify-content: center;
    line-height: 24px;
    margin: 0;
    min-height: 44px;
    outline: none;
    overflow: visible;
    pointer-events: auto;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: none;
    user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    width: 100%;
    word-break: keep-all;
    z-index: 0;
    border-radius: 80px;
    text-transform: uppercase;
    transition: all 0.15s ease-in-out;
    color: hsl(0,0%,100%);
    background-color: hsl(25,97%,53%);
    &:hover {
      background-color: var(hsl(0, 0%, 100%));
      color: var(hsl(25, 97%, 53%));
    }
`

const BotonPuntacion= styled.button `
  display: block; 
  margin: 0 auto; 
  background: none; 
  border: none;
  font-size: 15px; 
  color: white;
  width: 40px;
  height: 40px;
  background-color: rgba(72,76,82,0.12);
  border-radius: 100%;
  &:focus {     
    background-color: hsl(25, 97%, 53%);
  }
`

const StyleItem = {
  display: "block",
  textAlign: "center",
  margin: "0 auto",
  color: " hsl(0, 0%, 100%)",
}
const styleH1 = {
  textAlign: "initial",
  color: "hsl(0, 0%, 100%)"
}

const styleDiv = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgb(55 65 81)",
  color: "hsl(25, 97%, 53%)",
  borderRadius: "80px",
  width: "63%",
  marginTop: "1.25rem",
}



function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
const [items, setItems] = useState("")

const puntation = []

for(let i = 0; i < 6; i++){
  puntation.push(
      <CirclePuntation key={i}>
        <BotonPuntacion  onClick={() => setItems(i)}>{i}</BotonPuntacion>
      </CirclePuntation>
)
}

  return (
    <>
    {!isSubmitted && (
      <Box>
        <Circle>
          <img src={star} alt="" style={styleSVG} />
        </Circle>
        <h1 style={styleH1}>How did we do?</h1>
        <P className="pDisign">Please let us know how we did your support request. All feedback is appreciated to help us improve our offering!</P>
        <div style={{display: 'flex', flexDirection: 'row', marginBlockStart: "1em", marginBlockEnd: "1em"}}>
        <ContainerPuntation>
          {puntation}
        </ContainerPuntation>
        </div>
        <Button  onClick={() => setIsSubmitted(true)}>Submit</Button>


      </Box>
      )}

      {isSubmitted && (
        <ThankYou items={items} setIsSubmitted={setIsSubmitted} />
      )}
    </>
  );
}

const ThankYou = ({ items, setIsSubmitted }) => {
  return (
    <Box style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
      <img src={thanks} alt=""  />
      <div style={styleDiv} >
        <P>
          You selected {items} out of 5
        </P>
      </div>
      <h2  style={styleH1}>Thank you!</h2>
      <P className="pThankyou">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </P>
    </Box>
  )
}

export default App;
