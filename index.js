const fetchBreedDescription = require('./breedFetcher');

const breedName = process.argv.slice(2)[0];

fetchBreedDescription(breedName, (error, desc) => {
  if  (error) {
    console.log('Error: ', error);
  } else  {
    console.log(desc);
  }
});