import React, {useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listContactDetails } from "../redux/actions/contactActions";
import { Link, useParams, useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import { ListGroup, Button, Container } from "react-bootstrap";
import { message } from "antd";

const ContactScreen = () => {
  let navigate = useNavigate(true);

  // DISPATCH
  const dispatch = useDispatch();
  const { id } = useParams();
  // CONTACT DETAILS REDUCER
  const contactDetails = useSelector((state) => state.contactDetails);
  const { loading, contact, error } = contactDetails;

  const sendMessageHandler = (e) => {
    e.preventDefault();
    navigate(`/user/sendotp/${id}`);
  };

  useEffect(() => {
    // DISPATCH CONTACT DETAILS ACTION
    dispatch(listContactDetails(id));
  }, [dispatch,id]);

  return (
    <>
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

      <Link className="btn btn-primary text-light m-3" to="/">
        GO BACK
      </Link>
      <h4 className="text-secondary text-center my-4 py-4">
        <i className="fa-solid fa-address-book"></i> CONTACT DETAILS
      </h4>

      <Container className="text-center ">
        <ListGroup className="rounded shadow" >
          <ListGroup.Item>
            Name  : 
            {` ${contact?.result[0]?.firstname} ${contact?.result[0]?.lastname}`}
          </ListGroup.Item>
          <ListGroup.Item>Number : {contact?.result[0]?.phone}</ListGroup.Item>
          <ListGroup.Item>
          
            <Button
              onClick={sendMessageHandler}
              className="btn btn-sm text-success btn-primary"
              type="button"
            >
              <i className="fa-solid fa-share text-success my-2 mx-2"></i>
                Send Message
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </>
  );
};

export default ContactScreen;
