const fetchBreedDescription = (breed, callback) => {
  const request = require('request');
  request(`http://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(body)[0];
      if (data) {
        callback(error, data.description);
      } else {
        callback('Breed not found', null);
      }
    }
  });
}

module.exports = fetchBreedDescription;

//fetchBreedDescription('Siberian', (error, description) => {

// });