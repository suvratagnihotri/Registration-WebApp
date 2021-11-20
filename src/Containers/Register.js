import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Register(){
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState("");
    let navigate = useNavigate();

    function validateForm() {
        return name.length > 0 && email.length > 0 && password.length > 0;
      }

    function handleSubmit(event) {
        event.preventDefault();
        var name = event.target[0].value
        var email = event.target[1].value
        var password = event.target[2].value
        var location = event.target[3].value
        console.log(email)
        console.log(password)
        console.log(name)
        console.log(location)

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name:name,email:email,password:password,location:location })
      };
      fetch('http://localhost:8080/user/add', requestOptions)
      .then(response => {
        console.log(response)
        console.log(response.status)
        if(response.status === 200){
          navigate("../home", { replace: true });
        }
        if(response.status === 400){
          return (
            <div className="message">User Already registered</div>
          );
        }
      });
    }
    return (
        <div className="Login">
        <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Register
          </Button>
          <Button block size="lg" type="submit">
            GOTO Login
          </Button>
        </Form>
      </div>
    );
}