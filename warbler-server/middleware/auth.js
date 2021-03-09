require("dotenv").load();
// bring in environment variables


// bring in JSON web token module
const jwt = require("jsonwebtoken");

// make sure the user is logged in
// Authentication
// this is the idea of Authentication
exports.loginRequired = function(req, res, next) {
    // try to get the token from a http header
    try {
      const token = req.headers.authorization.split(" ")[1]; // Bearer then a space then token
      // decode that token
      // decoded is payload
      jwt.verify(token, process.env.SECRET_KEY, fucntion(err, decoded) {
          // if payload exists
          if(decoded) {
              // if successfully decoded this token then we're done return next()
              return next({
                status: 401,
                message: "Please log in first"
              });
          }
      });
      
      
    } catch (e) {
        return next({
            status: 401,
                message: "Please log in first"
             
        });
    }
};


// make sure we get the correct user
// Authorization
// now are you actually allowed to do this

exports.loginRequired = function(req, res, next) {
    
    
};



