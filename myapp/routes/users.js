var express = require('express');
var router = express.Router();
var cloudinary = require('cloudinary')


/* GET users listing. */
router.get('/', function(req, res, next) {
    var auth = {
        cloud_name: "dr5uptq8x",
        api_key: "741751299976763",
        api_secret: "DKQcc-vBekfpHxO7P88pI6pKVcs"
    }

    cloudinary.config(auth)
    // file = 
    cloudinary.v2.api.uploader.upload(file,
        function(error, result) { console.log(result, error); })

    res.render('users', { title: "hello" });
    // res.send('respond with a resource');
});

module.exports = router;