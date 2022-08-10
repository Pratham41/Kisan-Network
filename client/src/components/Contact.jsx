import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Contact = ({ contact }) => {
  return (
    <>
      <LinkContainer to={`/user/showContact/${contact.id}`}  >
        <Row>
          <Col className="my-2 py-2">
            <Card className=" shadow rounded text-center bg-primary" style={{cursor:"pointer"}} >
              <Card.Body as="h6" className="text-success">
                {`${contact.firstname} ${contact.lastname}`}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </LinkContainer>
    </>
  );
};

export default Contact;
