const express = require('express');
const app = express();
const moviesRouter = require('./routes/movies')
const seriesRouter = require('./routes/series')
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/movies', moviesRouter);
app.use('/series', seriesRouter);

app.listen(3000, function () {
   console.log('El servidor está corriendo en el 3000');
   console.log('Link = http://localhost:3000');
})