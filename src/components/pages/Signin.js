import { useState, useEffect } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    console.log(formErrors);
  }, [formErrors]);

  // validate function
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setFormErrors(validate(formValues));
    console.log(Object.keys(formErrors).length);
    if (Object.keys(formErrors).length === 0) {
      console.log(formValues["username"]);
      console.log(isSubmit);
      storeData(formValues);
    }
  };

  const storeData = async (formData) => {
    try {
      const response = await fetch(
        "https://flask-app-hmq66d7qyq-uc.a.run.app/submit-form",
        {
          // const response = await fetch("http://127.0.0.1:8000/submit-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const responseData = await response.json();

      if (
        responseData.message ===
        "Email already in use, please use a different email"
      ) {
        alert(responseData.message);
      } else {
        alert(responseData.message);
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during signup!", error);
    }
  };

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Sign Up</h2>
                  <p className=" mb-5">
                    Join Us - Just your Email and a Strong Password
                  </p>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicUserName"
                      >
                        <Form.Label className="text-center">
                          User Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="username"
                          placeholder="Username"
                          value={formValues.username}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <p style={{ color: "red" }}>{formErrors.username}</p>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="email"
                          placeholder="Email"
                          value={formValues.email}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <p style={{ color: "red" }}>{formErrors.email}</p>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={formValues.password}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <p style={{ color: "red" }}>{formErrors.password}</p>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <button type="submit" class="btn btn-primary">
                          Enter
                        </button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signin;
