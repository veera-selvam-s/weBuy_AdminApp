import React from 'react';
import {Container ,Row,Col,Form} from 'react-bootstrap';
import { Button } from '@material-ui/core';
import Input from '../components/UI/Input';

function Signin() {
    return (
        <div>
            <Container>
                <Row style={{marginTop:'40px'}}>
                    <Col md={{span:6,offset:3}}>
                        <Form>
                            <Input
                                label="Email"
                                placeholder="example@mail.com"
                                value=""
                                type="email"
                                onChange={() => { }}
                            />

                            <Input
                                label="Password"
                                placeholder="password"
                                value=""
                                type="password"
                                onChange={() => { }}
                            />
                            <Button variant="contained" type="submit" color="primary">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Signin;
