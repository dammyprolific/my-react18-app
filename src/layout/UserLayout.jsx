import React from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'

function UserLayout() {
  return (
    <Container className= 'bg-warning text-center my-6 p-4'>
      <Row>
        <Col md = {6} className='bg-primary text-white p-4'>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, sunt amet facilis vitae accusantium necessitatibus at, perferendis dignissimos, nostrum beatae est ipsam iste natus dolor illum pariatur ea doloribus sint.</p>
        <Button variant = 'light'>Click Me!!!</Button>
        </Col>
        <Col md = {6} className='bg-secondary text-white p-4'>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, sunt amet facilis vitae accusantium necessitatibus at, perferendis dignissimos, nostrum beatae est ipsam iste natus dolor illum pariatur ea doloribus sint.</p>
        <Button variant = 'light'>Click Me!!!</Button>
        </Col>
        
      </Row>
    </Container>
  )
}

export default UserLayout
