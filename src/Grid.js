import React from 'react'
import { Container } from 'react-bootstrap'

function Grid() {
  return (
    <div>
       <Container fluid='md'>
        <h3 className="text-bg-primary text-center my-2">Hello</h3>
       </Container>
       <Container fluid>
       <h3 className="text-bg-primary text-center my-2">Hello</h3>
       </Container>
    </div>
  )
}

export default Grid