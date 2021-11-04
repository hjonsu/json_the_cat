const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, function (err, res, body) {
  if (err) {
    console.log(err);
    return null;
  }
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  if (data[0]) {
    console.log(data[0].description);
  }
  if (data.length === 0) {
    console.log(`${args} is not found, or it is not a breed of cat!`);
  }
});