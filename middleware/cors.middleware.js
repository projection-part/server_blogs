const cors = require("cors");

const corsOptions = {
    origin: '*', // Replace with your client's domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // if your client needs to send cookies with the requests
  };

module.exports = cors(corsOptions);