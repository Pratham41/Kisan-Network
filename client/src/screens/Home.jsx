import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row, Container } from "react-bootstrap";
import ReactLoading from "react-loading";
import Contact from "../components/Contact";
import { listContacts } from "../redux/actions/contactActions";
import { message } from "antd";

const Home = () => {
  const dispatch = useDispatch();
  const contactList = useSelector((state) => state.contactList);
  const { loading, allContacts, error } = contactList;

  useEffect(() => {
    dispatch(listContacts());
  }, [dispatch]);

  return (
    <>
      <h4 className="text-secondary text-center my-4 py-4">
        <i className="fa-solid fa-address-book"></i> CONTACT LIST{" "}
        {`(TOTAL - ${allContacts?.length})`}{" "}
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
          {allContacts?.length > 0 &&
            allContacts?.map((con) => (
              <Col key={con.id} sm={12} md={6} lg={4} xl={3}>
                <Contact contact={con} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
