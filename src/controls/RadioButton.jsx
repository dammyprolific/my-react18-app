import React from 'react'
import { Form } from 'react-bootstrap'

function RadioButton() {
    return (
        <>
            <Form>
                <Form.Check
                    enabled type='radio'
                    label='Male' />

                <Form.Check
                    enabled type='radio'
                    label='Female' />

                <Form.Check
                    disabled type='radio'
                    label='Not Specified' />
            </Form>
        </>
    )
}

export default RadioButton
