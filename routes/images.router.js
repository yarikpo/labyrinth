const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/:name', function (req, res, next) {
    var options = {
      root: path.join(__dirname, '../src/public/images'),
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      }
    };
  
    var fileName = req.params.name;
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

module.exports = router;