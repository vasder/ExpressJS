var express = require('express');

var bookRouter = express.Router();
var sql = require('mssql');

var books = [
	{
		title: 'Chemmen',
		genre: 'Drama',
		author: 'Thakazhi',
		read: false,
		imgurl: 'http://2.bp.blogspot.com/-PsT63EIpoOs/Ujq0ufZBG8I/AAAAAAAADzU/WHz0Kv7FlfI/s1600/thakazhi_18X18_150.jpg'
	},
	{
		title: 'Oru Deshathinte Katha',
		genre: 'Travel',
		author: 'S K Pottakad',
		read: false,
		imgurl: 'http://specials.manoramaonline.com/Literature/2014/SK-Pottakkattu/images/rajasilpi-main.jpg'
	},
	{
		title: 'Wings of Fire',
		genre: 'Autobiography',
		author: 'APJ Abdul Kalam',
		read: false,
		imgurl: 'https://images.jagran.com/naidunia/abdulkalam_31_07_2015.jpg'
	},
	{
		title: 'Malgudy Days',
		genre: 'Short Stories',
		author: 'R K Narayan',
		read: false,
		imgurl: 'http://wirally.com/wp-content/uploads/2015/10/rk-laxman.jpg'
	},
];

bookRouter.route('/')
	.get(function (req, res) {
		var request = new sql.Request();
		request.query('select * from books',
			function (err, recoredset) {
				console.log(recoredset);
			});
		res.render('booksList', {
			title: 'Books',
			nav: [
				{
					Link: '/Books',
					Text: 'Books'
			},
				{
					Link: '/Authors',
					Text: 'Authors'
			}],
			books: books
		});
	});

bookRouter.route('/:id')
	.get(function (req, res) {
		var id =
			req.params.id;
		res.render('booksView', {
			title: 'Books',
			nav: [
				{
					Link: '/Books',
					Text: 'Books'
			},
				{
					Link: '/Authors',
					Text: 'Authors'
			}],
			book: books[id]
		});
	});

module.exports = bookRouter;
