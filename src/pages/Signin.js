import React, { Component } from 'react'

import { signInWithGoogle } from '../firebase/firebase.utils'

import { Form, Input, Button, Container, Label} from 'reactstrap'

export default class SignIn extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: '',
        }
    }

    render() {
        return(
            <Container>
                <Form>
                    <Input type="email" placeholder="email" required />
                    <Input type="password" placeholder="password" required />
                    <Button color="primary">Log In</Button>
                </Form>
                <Button color="primary" onClick={signInWithGoogle}>Log in with Google</Button>
            </Container>
        )
    }
}