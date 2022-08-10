import React from "react";
import moment from "moment";
import { Card, Row, Col } from "react-bootstrap";
const Message = ({ messages }) => {
  // CONVERT DATE TO NORMAL DATE
  const convertDate = (input) => {
    const date = moment(input).format("DD-MM-YYYY, hh:mm:ss")
    return date.toString();
  };
  return (
    <>
      <Row>
        <Col className="my-2 py-2">
          <Card className=" shadow rounded text-center bg-primary">
            <Card.Body>
              <Card.Header className="bg-success text-primary" as="p">
                {`${messages.name}`}
              </Card.Header>

              <hr />
              <Card.Text as="p" className="text-info">
                {`Time : ${convertDate(messages.time)}`}
              </Card.Text>
              <hr />
              <Card.Text className="text-dark" as="p">
                {`OTP : ${messages.otp}`}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Message;
