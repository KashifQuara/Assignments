const axios = require('axios')

axios.get('https://official-joke-api.appspot.com/random_joke')
  .then(response => {
    console.log(response.data.setup);
    console.log(response.data.punchline);
  })
  .catch(error => {
    console.log(error);
  });