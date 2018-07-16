var express = require('express');
var router = express.Router();
var cloudinary = require('cloudinary')
var qrcode = require('qrcode-generator')


/*Set configuration*/
//TODO: set your own configuration
var auth = {
    cloud_name:'YOUR CLOUD NAME',
    api_key:'YOUR API KEY',
    api_secret:'YOUR API SECRET'
}
cloudinary.config(auth);


//Setting for cloud resource search
//Find all uploaded images in the samples folder
var res_scope = {
    resource_type: 'image',
    type: 'upload',
    prefix: 'samples/', 
    max_results: 500,
}


/* GET home page. */
router.get('/', function(req, res, next) {

    cloudinary.v2.api.resources(res_scope,
        function(error, result) {
            var l = result.resources

            //Setting for QR code converter
            var opts = {
                errorCorrectionLevel: 'H',
                type: 'image/jpeg',
                rendererOpts: {
                    quality: 0.3
                }
            }

            var imgList = []


            l.forEach(function(element) {
                //convert a tag to its src
                var img = { url: element.url, qr: '' }

                //Try making qr out of the src image, and insert it into the object
                try {
                    var qrimg = qrcode(0, 'L')
                    qrimg.addData(element.url);
                    qrimg.make()
                    qrurl = qrimg.createDataURL();
                    img.qr = qrurl
                } catch (err) {
                    console.log(err.message)
                }

                imgList.push(img)
            })

            //Parse title and images variable for rendering
            var content = { title: 'Meow Space', images: imgList }
            res.render('index', content);

        })

});

module.exports = router;