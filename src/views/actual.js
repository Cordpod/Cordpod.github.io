import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

function Actual() {

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
      
      
      {showSuccess ? (
        <div>
        <p className="success-message">wddwdwd </p>
        <p className="success-message">
        wdwd</p>
        </div>
      ) : (
        <div>
            <div>
              <p>Smth from before: ?</p>
                <p>Public key for the challenge:
MBswDQYJKoZIhvcNAQEBBQADCgAwBwICAYcCAQM=</p>
                <p>e: 3</p>
                <p>Encrypted flag:
WzM0LCAyMjgsIDI3NiwgMjcxLCAxMDIsIDk4LCAzNiwgMzMxLCA3OSwgMzAzLCAzNDAsIDM0OCwgNzksIDI0LCAyNzYsIDMwMywgMjQsIDM0OCwgMjY1LCAyNzYsIDMwMywgMTA3LCA3NywgMTYsIDI3NiwgMjQsIDI2NSwgMzA0LCAzNiwgMzcsIDc5LCA0NSwgNDAsIDE3MSwgMjcxLCAzMDMsIDM2LCA3NywgNDQsIDQ0LCAzMDEsIDE2LCAyNzYsIDMwMywgMzMxLCAzMDQsIDc3LCAzMDMsIDIyOCwgMzA0LCAzMDEsIDMwNCwgMzYsIDEwMiwgODBd</p>
            </div>
        <h1> </h1>
        </div>
      )}
    </div>
  );
}
export default Actual;