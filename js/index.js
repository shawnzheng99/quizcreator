var express = require('express');
var config = require('./config');
var bodyParser = require('body-parser'); 
var qsts = require('./routers/questions');
//init
var port = config.port;
var app = express();

//router url
app.use(bodyParser.urlencoded({
    extended: true
}));

// parse post req body to json
app.use(bodyParser.json());

// router for questions
app.use('/qs', qsts);

// host frontend
app.use(express.static(__dirname + '/www'));

//---------errs---------
app.use((req, res, next) => {
    res.status(404).json({
        error: '特么页面丢了'
    });
});
app.use((error, req, res, next) => {
    console.log(error);
    res.status(500).json({
        error: '服务器有尼玛错误，去看log'
    });

});

app.listen(port, (error) => {
    error?console.log("error!"):console.log("server Started! ojbk! on port:", port);
});