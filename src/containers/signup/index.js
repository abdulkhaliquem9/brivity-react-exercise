import React, {useState} from 'react'
import { Form, Button, Container, PageHeader } from 'react-bootstrap'
import './index.css'

function Signup() {
    const [initialState, setState] = useState({email:"", displayName:"", password:"", confirmPassword:""})
    //Using higher order function
    const onChangeHandler = (key) => (event) => {
        console.log(`${key} change`, event.target.value)
        setState({...initialState, [key]: event.target.value}) //{key: }
    }
    return (
        <div className="sign-up">
        <Container>
            <Form>
            <h3>Create Account</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={event => onChangeHandler("email")(event)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDisplayName">
                    <Form.Label>Display Name</Form.Label>
                    <Form.Control type="text" placeholder="User Name"  onChange={onChangeHandler("displayName")} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  onChange={onChangeHandler("password")}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  onChange={onChangeHandler("confirmPassowrd")}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    SignUp
                </Button>
            </Form>
        </Container>
        </div>
    )
}

export default Signup
