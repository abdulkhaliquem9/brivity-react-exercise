import React from 'react'
import { Alert, Form, Button, Container, PageHeader } from 'react-bootstrap'
import './index.css'


function Signin() {
    return (
        <div className="sign-up">
            <Container>
                <Form>
                    <Alert variant="danger">
                        <strong>Wrong User Name or Password </strong>
                    </Alert>
                    <h3>Sign In</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Signin
