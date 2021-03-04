const db = require("../models");
// bring in models folder all models


// we want to create a message
// then we want to get a message
// then we might want to delete a message

exports.createMessage = async function(req, res, next) {

  try {
    let message = await db.Message.create({
      text: req.body.text,
      // this is going to be a specific id
      // route is /api/users/:id/messages
      user: req.params.id
    });
    // then find that specific user
    let foundUser = await db.User.findById(req.params.id);
    foundUser.messages.push(message.id); // every user.js has message id 
    await foundUser.save();
    // then save User
    // populate the user
    // send me back immediately the message with the username that created it with the user that created it
    let foundMessage = await db.Message.findById(message._id).populate("user", {
     // find this user so that we can add a property to that user
      username: true,
      profileImageUrl: true
    });
    // return with some JSON of our entire foundMessage Object
    return res.status(200).json(foundMessage);
  } catch (err) {
    return next(err);
    // then inside of our routes new file called messages.js
  }
};
