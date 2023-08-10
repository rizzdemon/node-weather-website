const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoibnRjaHJpc3QiLCJhIjoiY2xneXBlN2U5MGJ1YzNnb2RxdHo2bXQzaSJ9.zub1MhKBn5NWKA824IG-VQ&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('bruh wifi not working :(', undefined)
        } else if (response.body.features.length === 0) {
            callback('idk wtf that is try somthin else silly', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode