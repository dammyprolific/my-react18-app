import React from 'react'
import { Form } from 'react-bootstrap'

function CheckBox() {
  return (
    <>
      <Form>
        <Form.Check
        type='checkbox'
        label='Male'/>

        <Form.Check
        type='Checkbbox'
        label ='Female'/>

        <Form.Check
        type='Checkbbox'
        label ='Not Specified'/>
      </Form>
    </>
  )
}

export default CheckBox
