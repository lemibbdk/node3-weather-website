const request = require('request');

const forecast = (long, lati, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2b5c4b4ee2710adaa5f28ce2f1282f5f&query=' +
        long + ',' + lati

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                temperature: body.current.temperature,
                feelslike: body.current.feelslike
            })
        }
    })
}

module.exports = forecast