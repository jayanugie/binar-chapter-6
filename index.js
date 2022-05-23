const express = require('express');
const route = require('./routes/route');
const errorMiddleware = require('./middleware/error');
const notFoundMiddleware = require('./middleware/notfound');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(route);
app.use(errorMiddleware.error);
app.use(notFoundMiddleware.notFound);

app.listen(port);


