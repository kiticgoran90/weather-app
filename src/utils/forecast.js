const request = require('request')

const forecast = (longitude, latitude, location, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=061c294787e1e7194dd7e703d4d70cc4&query='+ latitude + ',' + longitude + '&units=m'
    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!')
        } else if(body.error) {
            callback(`${body.error.info}`)
        } else {
            callback(undefined, `Temperature in ${location} is ${body.current.temperature} degress. ${body.current.weather_descriptions}. There is ${body.current.precip}% chance of rain.`)
        }
    })
}

module.exports = forecast