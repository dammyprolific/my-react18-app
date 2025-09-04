import React from 'react'
import {Container, Card, Button} from 'react-bootstrap'

function CardLayout() {
  return (
    <Container className='text-center my-5'>                  
        <Card>
            <Card.Body>
                <Card.Title>Hello Bootstrap</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet a, asperiores officia harum ipsam repellat corrupti magnam natus aliquid, tempora repudiandae rerum praesentium optio, sapiente voluptatibus recusandae eligendi tenetur deleniti facere! Quisquam odio et placeat, nulla veniam, odit magnam laboriosam nesciunt dolores molestias quos pariatur incidunt! Ipsa, quod distinctio.
                </Card.Text>
                <Button variant='light'>Read More</Button>
            </Card.Body>
        </Card>
      
    </Container>
  )
}

export default CardLayout
