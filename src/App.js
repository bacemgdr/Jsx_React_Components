import React from "react";
// importation de objet product


// imortation de style de boostrap

import "bootstrap/dist/css/bootstrap.min.css";

// importation du card from boostrap
import { Card } from "react-bootstrap";


// importation des qautre components
import  Name from "./components/Name";
import Image from "./components/Image";
import Price from "./components/Price" ;
import Description from "./components/Description" ;

import SumImage from "./components/sumsung.jpg";








function App() {
  const firstName = "bacem";
  return (

    <>
        <Card style={{ width: '18rem' }}>
      <Image></Image>
      <Card.Body>
        
        < Name></Name>
        <Description></Description>
         <Price></Price>
      </Card.Body>
    </Card>
    
    {firstName && <img src={SumImage} alt ='myImage' width={100} />}
         </>
        
  );
}

export default App;
