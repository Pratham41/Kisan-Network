const router = require("express").Router();
const {
  insertUserData,
  sendOtp,
  showContacts,
  showContactByPhoneNo,
  showMessages
} = require("../controllers/user");

router.route("/add").post(insertUserData);
router.route("/sendotp").post(sendOtp);
router.route("/showAllContacts").post(showContacts);
router.route("/showAllMessages").post(showMessages);
router.route("/showContact/:id").post(showContactByPhoneNo);

module.exports = router;
