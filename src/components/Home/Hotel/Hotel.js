import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Hotel = ({hotel}) => {
    const {Details, img} = hotel;
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 2 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Details:{Details}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
        </div>
    );
};

export default Hotel;