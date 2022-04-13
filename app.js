const express = require('express');
const path = require('path');
const app = express();

const PORT = 5000;

app.get('/test', (req, res) => {
    res.send("Hello");
});


app.get('/', (req, res) => {
    let options = {
        root: path.join(__dirname, '.'),
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
    };

    let fileName = './src/public/index.html';
    res.sendFile(fileName, options, () => console.log('Sent:', fileName));
});

app.get('/index.js', (req, res) => {
    let options = {
        root: path.join(__dirname, '.'),
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
    };

    let fileName = './src/public/index.js';
    res.sendFile(fileName, options, () => console.log('Sent:', fileName));
});

app.get('/index.css', (req, res) => {
    let options = {
        root: path.join(__dirname, '.'),
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
    };

    let fileName = './src/public/index.css';
    res.sendFile(fileName, options, () => console.log('Sent:', fileName));
});



app.get('/components/:name', function (req, res, next) {
    var options = {
      root: path.join(__dirname, 'src/public/components'),
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

app.get('/levels/:name', function (req, res, next) {
  var options = {
    root: path.join(__dirname, 'src/public/levels'),
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

app.get('/images/:name', function (req, res, next) {
    var options = {
      root: path.join(__dirname, 'src/public/images'),
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

app.get('/:name', function (req, res, next) {
    var options = {
      root: path.join(__dirname, 'src/public/pages'),
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

app.get('/styles/:name', function (req, res, next) {
    var options = {
      root: path.join(__dirname, 'src/public/styles'),
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

app.listen(PORT, (req, res) => console.log(`Server has been started at port: ${PORT}`));