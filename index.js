let request = require('request');
const argv = require('yargs').argv;

let apiKey = '0a5d5fd45c0ef7b565b787396c87e2f4';
let city = argv.c || 'philadelphia';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

request(url, function (err, response, body) {
	if (err) {
		console.log('error', error);
	} else {
		let weather = JSON.parse(body)

		let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
		console.log(message);
	}
});





