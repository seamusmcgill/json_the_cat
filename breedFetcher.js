const request = require("request");

request(`https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`, (error, response, body) => {
  const data = JSON.parse(body);
  // Output the error message if URL isn't valid
  if (error) {
    console.log(data[0].message);
  }
  if (!error) {
    // If no error but no breed was found
    if (data.length === 0) {
      console.log("Breed not found.\n");
      return;
    }
    // If breed was entered output description
    if (data) {
      console.log(data[0].description);
    }
  }
});