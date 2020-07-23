import React, { useState } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import axios from 'axios';
export const LoginForm = () => {
    // '' is the initial value of userName
    // setUserName is used to change the value of userName
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitLogin = async () => {
        let body = {
            email: email,
            password: password
        }
        const res = await axios.post(`http://localhost:8080/auth/signin`, body);
        console.log(body);
        console.log(res);
    }
    return <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                Log-in to your account
      </Header>
            <Form size='large' onSubmit={submitLogin}>
                <Segment stacked>
                    <Form.Input
                        fluid
                        icon='user'
                        iconPosition='left'
                        placeholder='E-mail address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button color='teal' fluid size='large'>
                        Login
          </Button>
                </Segment>
            </Form>
            <Message>
                New to us? <a href='#'>Sign Up</a>
            </Message>
        </Grid.Column>
    </Grid>
}

