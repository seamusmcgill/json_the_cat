const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const [data] = JSON.parse(body);
    // Output the error message if URL isn't valid
    if (error) {
      callback(data.message, null);
    }
    if (!error) {
      // If no error but no breed was found
      if (data) {
        return callback(null, data.description);
      }
      // If breed was entered output description
      callback("Breed not found.", null);
    }
  });
};

module.exports = { fetchBreedDescription };