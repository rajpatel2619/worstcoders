const express = require("express");
const app = express();

bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/dataRoutes'); //importing route
routes(app); //register the route


app.listen(PORT, console.log(`Server started on port ${PORT}`));
