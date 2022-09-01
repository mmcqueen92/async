const request = require('request');

const input = process.argv.slice(2)[0];


request(`http://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) =>  {
  if (error)  {
    console.log('error: ', error);
  } else if (!error)  {
    const data = JSON.parse(body);
    if (data[0])  {
      console.log(data[0].description);
    } else if (!data[0])  {
      console.log('Error :( breed not found');
    }
  }
});

