const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function (err, response, body) {
    if (err) {
      return callback(err, null);
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback(null, `${breedName} is not found, or it is not a breed of cat!`);

    }


    return callback(null, data[0].description.trim());

  });

};
module.exports = {
  fetchBreedDescription
};