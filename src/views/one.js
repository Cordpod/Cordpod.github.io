import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

function One() {

  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === "meow") {
      setShowSuccess(true);
      setShowError(false); // Reset error state on successful login
    } else {
      setShowSuccess(false);
      setShowError(true); // Set error state if password is wrong
    }
  };

  return (
    <div>
      <p>challenge 1: TEST TEST</p>
      
      {showSuccess ? (
        <div>
        <p className="success-message">/ᐠ_ ꞈ _ᐟ\ɴʏᴀ~ </p>
        <p className="success-message">
        Sometimes u just need to say PLEASE for doors to open</p>
        </div>
      ) : (
        <div>
      <p>lwvb bzg bpm xiaaewzl xzqvotma cqn yjbbfxam rb jvxpdb wjq rv trmmrwp dro kmdekv zkccgybn sc woyg aol whzzdvyk pz uva bytvt wkh sdvvzrug xzx lv zurqj</p>
        <Form className="bypass-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="password"
              placeholder="password?"
              value={password}
              onChange={handlePasswordChange}
            />
            <Form.Text className="text-muted">
              Enter the correct password to clear the stage.
            </Form.Text>
          </Form.Group>
          {showError && (
              <p className="error-message">no.</p>
            )}
          <button type="submit">Submit</button>
        </Form>
        </div>
      )}
    </div>
  );
}
export default One;