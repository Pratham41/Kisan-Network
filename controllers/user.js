const { db } = require("../config/db");
require("dotenv").config();
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

exports.insertUserData = (req, res) => {
  const insertQuery = "INSERT INTO users SET ?";
  db.query(insertQuery, req.body, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(201).json({ message: "Error !", err });
      ;
    } else {
      return res.status(201).json({ message: "User added !", result });
    }
  });
};

exports.sendOtp = (req, res) => {
  const insertQuery = "INSERT INTO otpdata SET ?";
  const { id, mobileNumber, bodyToSend, otp, timeNow } = req.body;
  console.log(req.body);
  db.query(insertQuery, { user_id: id, otp: otp, time:timeNow }, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Error !", err });
    } else {
      client.messages
        .create({
          body: bodyToSend,
          from: `${process.env.TWILIO_PHONE_NO}`,
          to: `+91${mobileNumber}`,
        })
        .then((message) =>
          res
            .status(201)
            .json({ message: "Message sent successfully !", To: message.to })
        )
        .catch((err) =>
          res.status(500).json({ message: "Message failed !", err })
        );
    }

  });
};

exports.showContacts = (req, res) => {
  const showQuery = "SELECT * from users";
  db.query(showQuery, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Error !", err });
      return;
    } else {
      res
        .status(200)
        .json({ message: "Contacts fetched successfully !", result });
    }
  });
};

exports.showMessages = (req, res) => {
  const showQuery =
    "SELECT CONCAT(users.firstname,' ',users.lastname) AS name, otpdata.otp, otpdata.otp_id as id, otpdata.time From users JOIN otpdata ON users.id = otpdata.user_id ORDER BY otpdata.time DESC";
  db.query(showQuery, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Error !", err });
      return;
    } else {
      res
        .status(200)
        .json({ message: "Messages fetched successfully !", result });
    }
  });
};

exports.showContactByPhoneNo = (req, res) => {
  const showQuery = "SELECT * from users WHERE id = ?";
  db.query(showQuery, [req.params.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Error !", err });
      return;
    } else {
      res
        .status(200)
        .json({ message: "Contact fetched successfully !", result });
    }
  });
};
