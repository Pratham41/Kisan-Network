import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row, Container } from "react-bootstrap";
import ReactLoading from "react-loading";
import Message from "../components/Message";
import { listMessages } from "../redux/actions/messageActions";
import { message } from "antd";

const MessageScrren = () => {
  const dispatch = useDispatch();
  const messageList = useSelector((state) => state.messageList);
  const { loading, allMessages, error } = messageList;

  useEffect(() => {
    dispatch(listMessages());
  }, [dispatch]);

  return (
    <>
      <h4 className="text-secondary text-center my-4 py-4">
        <i className="fa-solid fa-envelope-circle-check"></i> MESSAGE LIST{" "}
        {`(TOTAL - ${allMessages?.length})`}{" "}
      </h4>
      {error && message.error("Something went wrong !")}
      {loading && (
        <ReactLoading
          className="m-auto"
          type="spin"
          color="#339966"
          height={"5%"}
          width={"5%"}
        />
      )}

      <Container className="shadow rounded my-4 p-4 ">
        <Row>
          {allMessages?.length > 0 &&
            allMessages?.map((msg) => (
              <Col key={msg.id} sm={12} md={6} lg={4} xl={3}>
                <Message messages={msg} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default MessageScrren;
