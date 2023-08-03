import React from "react";
import door from './door.png';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useState } from "react";




function Home() {
  return (
    <div>
      You see 2 buttons. Which one?

      <div>
        {/* <img src={door} className="door"/>
        <img src={door} className="door"/> */}
        <Button variant="dark"><Link to={"/troll"}>1</Link></Button>{' '}
        <Button variant="dark"><Link to={"/one"}>2</Link></Button>{' '}

      </div>
    </div>
  );
}

export default Home;