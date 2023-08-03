import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

function Login() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setFormErrors(validate(formValues));
    console.log(Object.keys(formErrors).length);
    if (Object.keys(formErrors).length === 0) {
      console.log(formValues["username"]);
      console.log(isSubmit);
      sendDataToFlask(formValues);
      navigate("/dashboard", { state: { username: formValues["username"] } });
    }
  };

  const sendDataToFlask = async (formData) => {
    const url = "http://127.0.0.1:5000/add";
    const requestBody = new URLSearchParams(formData).toString();

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: requestBody,
    })
      .then((response) => response.json())
      .then((data) => {
        // Process the response data here
        console.log(data);
      })
      .catch((error) => {
        // Handle error here
        console.error("Error:", error);
      });
  };

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

  return (
    <div>
      <Container>
        {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
          <Link
            to={{
              pathname: "/dashboard",
              prop: formValues["username"],
            }}
          >
            ddwdd
          </Link>
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )} */}

        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">
                    Predicative Technology
                  </h2>
                  <p className=" mb-5">Please enter your login and password!</p>
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
                      >
                        <p className="small">
                          <a className="text-primary" href="#!">
                            Forgot password?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <button type="submit" class="btn btn-primary">
                          {/* <Link to="/dashboard" className="nav-link text-white"> */}
                          Enter
                          {/* </Link> */}
                        </button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <a href="{''}" className="text-primary fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
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

export default Login;
