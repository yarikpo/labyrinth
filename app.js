const express = require('express');
const app = express();

const PORT = 5000;

const rout = require('./routes/rout.router');
const routComponents = require('./routes/components.router');
const routImages = require('./routes/images.router');
const routLevels = require('./routes/levels.router');
const routStyles = require('./routes/styles.router');

app.use('/', rout);
app.use('/components', routComponents);
app.use('/images', routImages);
app.use('/levels', routLevels);
app.use('/styles', routStyles);


app.listen(PORT, (req, res) => console.log(`Server has been started at port: ${PORT}`));