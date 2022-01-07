import React, { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FormGroup } from '@mui/material';
import Input from '../components/UI/Input';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../actions/user.actions';
import Layout from '../components/Layout';
import { useEffect } from "react";

const Signup = (props) => {

    const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.loading) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    }
  }, [user.loading]);

  const userSignup = (e) => {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    dispatch(signup(user));
  };

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  if (user.loading) {
    return <p>Loading...!</p>;
  }

    return (
        <Layout>
            <Container>
                {user.message}
                <Row style={{ marginTop: '40px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <FormGroup onSubmit={userSignup}>
                            <Row>
                                <Col md={6}>
                                    <Input
                                        label="First Name"
                                        placeholder="first name"
                                        value={firstName}
                                        type="text"
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Input
                                        label="Last Name"
                                        placeholder="last name"
                                        value={lastName}
                                        type="text"
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <Input
                                label="Email"
                                placeholder="example@mail.com"
                                value={email}
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Input
                                label="Password"
                                placeholder="password"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button variant="contained" type="submit" color="primary">
                                Submit
                            </Button>
                        </FormGroup>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Signup
