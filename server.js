const express = require('express'),
    path = require('path'),
    exphbs = require('express-handlebars'),
    port = process.env.PORT || 4000;
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes/index');

let app = express();

//view engine setup
/*app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'layoutDataTables'}));
app.set('view engine', 'handlebars');*/

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// set static, public stuff assesible to the browser
// app.use(express.static(path.join(__dirname + '/public')));

app.use(express.static(path.join(__dirname, '/dist')));

app.use('/', routes);

app.use('*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port);
console.log('CSP API server started on:' + port);
