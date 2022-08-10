import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listContactDetails } from "../redux/actions/contactActions";
import { sendMessages } from "../redux/actions/messageActions";
import { Link, useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import FormContainer from "../components/FormContainer";
import { Button, Form } from "react-bootstrap";
import { message } from "antd";
import moment from "moment";

const SendMessage = () => {
  const otp = Math.floor(100000 + Math.random() * 900000);
  const [bodyToSend, setBodyToSend] = useState(`Hi. Your OTP is : ${otp}`);
  const [mobileNumber, setMobileNumber] = useState(0);

  // DISPATCH
  const dispatch = useDispatch();
  const { id } = useParams();

  // CONTACT DETAILS REDUCER
  const contactDetails = useSelector((state) => state.contactDetails);
  const { loading, contact, error } = contactDetails;

  const messageSend = useSelector((state) => state.messageSend);
  const {
    loading: loadingMessage,
    called,
    success,
    error: errorMessage,
  } = messageSend;

  useEffect(() => {
    // DISPATCH CONTACT DETAILS ACTION
    if (id) {
      dispatch(listContactDetails(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    setMobileNumber(contact?.result[0]?.phone);
  }, [contact]);

  const submitHandler = (e) => {
    e.preventDefault();
    const timeNow = moment();
    dispatch(sendMessages(id, mobileNumber, bodyToSend, otp, timeNow));
  };

  useEffect(() => {
    if (called) {
      success
        ? message.success("OTP sent successfully !")
        : message.error("OTP sent failed !");
    }
  }, [success, called]);

  return (
    <>
      <Link className="btn btn-primary text-light m-3" to="/">
        GO BACK
      </Link>
      <FormContainer>
        {error && message.error("Something went wrong !")}
        {errorMessage && message.error("Something went wrong !")}
        {loading && (
          <ReactLoading
            className="m-auto"
            type="spin"
            color="#339966"
            height={"5%"}
            width={"5%"}
          />
        )}

        {loadingMessage && (
          <ReactLoading
            className="m-auto"
            type="spin"
            color="#339966"
            height={"5%"}
            width={"5%"}
          />
        )}

        <h4 className="text-secondary text-center my-4 py-4">
          <i className="fa-solid fa-address-book"></i> SEND MESSAGE
        </h4>

        <Form onSubmit={submitHandler} className="rounded shadow p-4">
          <Form.Group controlId="to">
            <Form.Label>To </Form.Label>
            <Form.Control
              type="number"
              readOnly
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              style={{ borderLeft: "5px solid green" }}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="body">
            <Form.Label className="my-2">Body </Form.Label>
            <Form.Control
              type="text"
              value={bodyToSend}
              onChange={(e) => setBodyToSend(e.target.value)}
              readOnly
              style={{ borderLeft: "5px solid green" }}
            ></Form.Control>
          </Form.Group>
          <Button
            type="submit"
            className="btn btn-primary text-success my-3 py-2"
          >
            <i className="fas fa-paper-plane text-success"></i> Send
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default SendMessage;
