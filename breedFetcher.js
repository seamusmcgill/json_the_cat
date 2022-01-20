const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    // Output the error message if URL isn't valid
    if (error) {
      callback(data[0].message, null);
    }
    if (!error) {
      // If no error but no breed was found
      if (data.length === 0) {
        callback(null, "Breed not found.");
      } else if (data) {
      // If breed was entered output description
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };