import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const Account = () => (
  <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 80%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '80%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Email' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='black' fluid size='large'>
              Login
            </Button>
             <br />
            <Button color='green' fluid size='large'>
              Signup
            </Button>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
)

export default Account