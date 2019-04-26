module.exports = (req, res, next) => {
  // get the auth header valuel
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader !== undefined) {
    console.log(req.headers);
    // split the space
    const bearer = bearerHeader.split(" ");
    // get token from array
    const bearerToken = bearer[1];
    // set the token
    req.token = bearerToken;
    // next middleware
    next();
  } else {
    res.status(403).send();
  }
};
