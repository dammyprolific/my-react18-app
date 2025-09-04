import React from 'react'
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap'

function TextBox() {
    return (
        <Container className='mt-5'>
            <Row>
                <Col>
                    <h1>This is  Text Control</h1>
                    <Form>
                        <Form.Group controlId='username'>
                            <Form.Label>UserName</Form.Label>
                            <FormControl
                                type='text'
                                placeholder='Enter A Name'
                                required
                                maxLength={30}
                                minLength={3} />
                            <Form.Text
                                controlId='helpText'
                                className='text-danger'>Enter  A Name</Form.Text>
                        </Form.Group>

                        <Form.Group controlId='email'>
                            <Form.Label>Email</Form.Label>
                            <FormControl
                                type='text'
                                placeholder='Enter Your Email'
                                required
                                maxLength={50}
                                minLength={3} />
                            <Form.Text
                                controlId='helpText'
                                className='text-danger'>Enter  An Email</Form.Text>
                        </Form.Group>
                        <Button>Click Me</Button>
                    </Form>
                </Col>
            </Row>

        </Container>
    )
}

export default TextBox
