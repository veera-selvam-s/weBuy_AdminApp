import React from 'react'
import {Container ,Row,Col,Form} from 'react-bootstrap';
import Input from '../components/UI/Input';
import { Button } from '@material-ui/core';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Signup=(props)=> {
	
	const auth = useSelector(state=>state.auth);
	
	if(auth.authenticate){
        return <Redirect to={`/`} />
    }
	
    return (
        <div>
            <Container>
                <Row style={{ marginTop: '40px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Input
                                        label="First Name"
                                        placeholder="first name"
                                        value=""
                                        type="text"
                                        onChange={() => { }}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Input
                                        label="Last Name"
                                        placeholder="last name"
                                        value=""
                                        type="text"
                                        onChange={() => { }}
                                    />
                                </Col>
                            </Row>
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

export default Signup
