import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import { Link } from "react-router-dom";

function Troll() {

  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === "PLEASE") {
      setShowSuccess(true);
      setShowError(false); // Reset error state on successful login
    } else {
      setShowSuccess(false);
      setShowError(true); // Set error state if password is wrong
    }
  };


return (
  <div>
    
    
    {showSuccess ? (
      <div>
      <p className="success-message">and thank you </p>
      <Button variant="dark"><Link to={"/intermediate"}>this hertz man</Link></Button>{' '}
      {/* <li><a class="nav-link js-scroll-trigger" href="/intermediate">here??</a></li> */}
      </div>
    ) : (
      <div>
        <p>Good( ･ω･)ﾉmorning~ </p>
    <p>﻿-- . .-- -- . .-- -- . .-- -- . .-- -- . .-- -- . .-- -- .-- . -- . .-- -- . .-- -- . --- .-- --..-- - .-. -.-- ....... - .... . ....... --- - .... . .-. ....... -.. --- --- .-. --..-- -- . .-- -- . .-- -- . .-- -- --- . .-- -- -- --- . .-- -- . --- . -- --- .-- -- . .-- --- . -- --- .-- . .-- -- --- --..-- ....... - .... .. ... ....... .. ... ....... -. --- - ....... - .... . ....... .- -.-. - ..- .- .-.. ....... -.-. .... .- .-.. .-.. . -. --. . --..-- -- . .-- -- . .-- -- . .-- -- --- . .-- -- .-- . -- --- .-- -- . --- .-- --..-- ....... .-.. --- .-..</p>
      <Form className="bypass-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="password"
            placeholder="???"
            value={password}
            onChange={handlePasswordChange}
          />
          <Form.Text className="text-muted">
            say it with sincerity 
          </Form.Text>
        </Form.Group>
        {showError && (
              <p className="error-message">naur.</p>
            )}
        <button type="submit">Submit</button>
      </Form>
      </div>
    )}
  </div>
);
}

export default Troll;