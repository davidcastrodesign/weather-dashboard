const request = require('postman-request');



const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=bc2b8570844ca20017843faa12df78ff&query=' + latitude + ',' + longitude + '&units=f';

    request ({ url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('unable to find location', undefined);
        } else {
            callback(
                undefined, 
                body.current.weather_descriptions[0] + '. Temperature: ' + body.current.temperature + ' degrees. Feels like: ' + 
                body.current.feelslike + ' degrees out. ' + 'Humidity: ' + body.current.humidity + '%');
        
        }
    });
};

module.exports = forecast;