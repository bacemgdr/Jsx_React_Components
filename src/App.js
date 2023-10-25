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








function App() {
  const firstName = "Bacem";
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
    
    {firstName && <img src="./components/sumsung.jpg" alt="sumsung"/>}
         </>
        
  );
}

export default App;
