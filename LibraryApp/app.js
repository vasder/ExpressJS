var express = require('express');

var app = express();

var sql = require('mssql');
var config = {
	user: 'books',
	password: 'pluralsight1@',
	server: 'gpnju6fwr2.database.windows.net',
	database: 'Books',
	options: {
		encrypt: true
	}
};

sql.connect(config, function (err) {
	console.log(err);
});

var port = 5000;

//var bookRouter = express.Router();
var bookRouter = require('./src/routes/bookRoutes');

app.use(express.static('public'));
//app.use(express.static('src/views'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/Books', bookRouter);

app.get('/', function (req, res) {
	res.render('index', {
		title: 'Vinz Library',
		nav: [
			{
				Link: '/Books',
				Text: 'Books'
			},
			{
				Link: '/Authors',
				Text: 'Authors'
			}]
	});
});

app.get('/vineeth', function (req, res) {
	res.send("Hello Vineeth");
});

app.listen(port, function (err) {
	console.log('Running on ' + port);
});
