import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Doctor = ({doctor}) => {
    const {name, img, expert} = doctor;
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 2 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Name:{name}</Card.Title>
          <Card.Text>
            Expart:{expert}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

        </div>
    );
};

export default Doctor;