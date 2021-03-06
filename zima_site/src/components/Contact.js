import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Contact extends Component {
    constructor() {
        this.state = {
            email: ''
        }
    }

    changeHandler = event => {
        this.setState({
          email: event.target.value
        });
    }

    submitFormHandler = event => {
        event.preventDefault();
        
        console.dir(this.refs.name.value); //will give us the name value
      }
      
render() {
    return (
        <Form key={contact-form} method="POST" action="/contact">
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
                This is some placeholder block-level help text for the above input.
                It's a bit lighter and easily wraps to a new line.
            </FormText>
            </FormGroup>
            <Button>Submit</Button>
        </Form>
        );
    }


}





