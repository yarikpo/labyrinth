const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/test', (req, res) => {
    res.send("Hello");
});




router.get('/', (req, res) => {
    let options = {
        root: path.join(__dirname, '..'),
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
    };

    let fileName = './src/public/index.html';
    res.sendFile(fileName, options, () => console.log('Sent:', fileName));
});

router.get('/index.js', (req, res) => {
    let options = {
        root: path.join(__dirname, '..'),
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
    };

    let fileName = './src/public/index.js';
    res.sendFile(fileName, options, () => console.log('Sent:', fileName));
});

router.get('/index.css', (req, res) => {
    let options = {
        root: path.join(__dirname, '..'),
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
    };

    let fileName = './src/public/index.css';
    res.sendFile(fileName, options, () => console.log('Sent:', fileName));
});

router.get('/:name', function (req, res, next) {
    var options = {
      root: path.join(__dirname, '../src/public/pages'),
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