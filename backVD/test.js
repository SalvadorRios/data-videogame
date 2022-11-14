const axios = require('axios');

axios.get('http://store.steampowered.com/api/appdetails?appids=1091500')
.then(function (response) {
// handle success
console.log(response.data);
})
.catch(function (error) {
// handle error
console.log(error);
})
