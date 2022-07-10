const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/test', (req, res) => {
    res.send("Hello");
});

function getOptions(dir) {
  return {
      root: path.join(__dirname, dir),
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      }
  };
}


router.get('/', (req, res) => {
    let options = getOptions('..');

    let fileName = './src/public/index.html';
    res.sendFile(fileName, options, () => console.log('Sent:', fileName));
});

router.get('/index.js', (req, res) => {
    let options = getOptions('..');

    let fileName = './src/public/index.js';
    res.sendFile(fileName, options, () => console.log('Sent:', fileName));
});

router.get('/index.css', (req, res) => {
    let options = getOptions('..');

    let fileName = './src/public/index.css';
    res.sendFile(fileName, options, () => console.log('Sent:', fileName));
});

router.get('/:name', function (req, res, next) {
    var options = getOptions('../src/public/pages');
  
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