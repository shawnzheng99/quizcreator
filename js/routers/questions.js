var express = require('express');
var router = express.Router();
var mydb = require('../util.js').mydb;
var qstTable = 'question';

// get questions from db
router.get('/getq', function(req, res){
    let tag = req.query.tag;
    mydb(qstTable).select('*')
        .where("tag", "=", tag)
    .then(function(ret){
        res.json(ret);
    }).catch(e => console.log('get q err: ', e));
});

// save data to db
router.post('/save', function(req, res){
    // delete previous qs
    mydb(qstTable).del()
    .then(() => {
        // loop each and push in db
        for(let i = 0; i < req.body.qst.length; ++i){
            let qst = {
                body : req.body.qst[i].body,
                answers : req.body.qst[i].options,
                correct : req.body.qst[i].idx,
                tag : req.body.qst[i].tag,
            }
            mydb(qstTable)
                .insert(qst)
            .catch(e => console.log('err: ', e)); // if sth wrong then stop, send back to client
        }
    }).catch(e => console.log('err: ', e) );
  
    res.json({
        "status": "ojbk"
    });
});

module.exports = router; 