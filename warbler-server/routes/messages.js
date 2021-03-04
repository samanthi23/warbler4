const express = require("express");
const router = express.Router({ mergeParams: true });
// allows us to get the id inside this router, mergeParams


// bring in our createMessage from handlers/messages
const {
  createMessage,
  getMessage,
  deleteMessage
} = require("../handlers/messages");

// instead of router.get or router.post just use router.route method
// prefix - /api/users/:id/messages
// when there is a POST we are going to call createMessage
router.route("/").post(createMessage);

// prefix - /api/users/:id/messages/:message_id
router
  .route("/:message_id")
  .get(getMessage)
  .delete(deleteMessage);

module.exports = router;
