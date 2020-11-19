let express = require('express')
let app = express();
var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Welcome to Express'));

app.listen(port, function() {
    console.log("Running API on Port "+ port);
});

let bodyParser = require('body-parser');
let mongoose = require('mongoose');

app.use(bodyParser.json());

let apiRoutes = require("./src/routes")
app.use('/api', apiRoutes)

//connect to mongoose
const dbPath = 'mongodb://localhost/presetAPI';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})