import React from 'react';
import styles from './TutorRegistration.module.css';
import axios from 'axios';
import { Container, CardGroup, Card, Row, Col } from 'react-bootstrap';

class TutorRegistration extends React.Component {

  constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
    //this.validate();
  }

  onLogin = () => {
    window.location.href = 'login'; 
  }
    
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);

        axios({ 
          url: '/api/saveTutorProfileDetails',
          method: 'POST',
          data: this.state.input
        })
        .then(() => {
          console.log("Tutor Profile Details Data has been sent to the server");
          window.location.href = 'login';
        })
        .catch(() => {
          console.log("Internal server error in TutorRegistration Component");
        });
  
        let input = {};
        input["name"] = "";
        input["email"] = "";
        input["password"] = "";
        input["confirmPassword"] = "";
        input["phoneNo"] = "";
        this.setState({input:input});
  
    }
  }

  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }

      if (!input["confirmPassword"]) {
        isValid = false;
        errors["confirmPassword"] = "Please enter your password again.";
      }

      if (!input["phoneNo"]) {
        isValid = false;
        errors["phoneNo"] = "Please enter your phone number.";
      }
  
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your Email Address.";
      }

      if (!input["name"]) {
        isValid = false;
        errors["name"] = "Please enter your name.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid Email address.";
        }
      }

      if (typeof input["password"] !== "undefined") {
        if(input["password"].length < 6) {
          isValid = false;
          errors["password"] = "Password must contain atleast 6 characters.";
        }
      }

      if(input["password"] !== input["confirmPassword"]) {
        isValid = false;
        errors["confirmPassword"] = "Passwords doesnot match."
        errors["password"] = "Passwords doesnot match."
      }

      if(typeof input["phoneNo"] !== "undefined") {
        pattern = new RegExp(/^[0-9]\d*$/);
        if(!pattern.test(input["phoneNo"]) || input["phoneNo"].length<10 || input["phoneNo"].length>10) {
          isValid = false;
          errors["phoneNo"] = "Please enter valid phone number."
        }
      }
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <div className={styles.TutorRegistration}>       
        <form onSubmit={this.handleSubmit}>
        <Container fluid>
            <CardGroup className="m-5 d-block">
              <Card className="m-5 border-0 shadow" style={styles.card}>
                <Row>
                  <Col className={styles.setimg}>
                    <Card.Img  src="https://i.pinimg.com/originals/de/1d/d8/de1dd840a9b87f565d85191abb03d2fa.jpg" style={styles.cardImage} />
                  </Col>
                  <Col >
                    <Card.Body>
                        <Card.Title as="h1"> Registration Form</Card.Title>
                        <br/><br/>

                        <div class="form-group">
                          <label for="name">Name:</label>
                          <input 
                            type="text" 
                            name="name" 
                            value={this.state.input.name}
                            onChange={this.handleChange}
                            class="form-control" 
                            placeholder="Enter name" 
                            id="name" />
                
                            <div className="text-danger">{this.state.errors.name}</div>
                        </div>

                        <div class="form-group">
                          <label for="email">Email Address:</label>
                          <input 
                            type="text" 
                            name="email" 
                            value={this.state.input.email}
                            onChange={this.handleChange}
                            class="form-control" 
                            placeholder="Enter email" 
                            id="email" />
                
                            <div className="text-danger">{this.state.errors.email}</div>
                        </div>

                        <div class="form-group">
                          <label for="name">Password:</label>
                          <input 
                            name="password"
                            type="password" 
                            value={this.state.input.password}
                            onChange={this.handleChange}
                            class="form-control" 
                            placeholder="Enter password" 
                            id="password" />
                
                            <div className="text-danger">{this.state.errors.password}</div>
                        </div>

                        <div class="form-group">
                          <label for="name">Confirm Password:</label>
                          <input  
                            name="confirmPassword"
                            type="password" 
                            value={this.state.input.comfirmPassword}
                            onChange={this.handleChange}
                            class="form-control" 
                            placeholder="Enter conform password" 
                            id="confirmPassword" />
                
                            <div className="text-danger">{this.state.errors.confirmPassword}</div>
                        </div>

                        <div class="form-group">
                          <label for="phoneNo">Phone number:</label>
                          <input 
                            type="tel" 
                            name="phoneNo"
                            value={this.state.input.phoneNo}
                            onChange={this.handleChange}
                            class="form-control" 
                            placeholder="Enter phone number" 
                            id="phoneNo" />
                
                            <div className="text-danger">{this.state.errors.phoneNo}</div>
                        </div>
                          
                        <input type="submit" value="Submit" className="btn btn-success" />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button className='btn btn-info' onClick={this.onLogin}>Login</button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </CardGroup>
          </Container>
        </form>
        <br/>
      </div>
    );
  }
}

TutorRegistration.propTypes = {};

TutorRegistration.defaultProps = {};

export default TutorRegistration;
