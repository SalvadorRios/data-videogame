const axios = require('axios');

module.exports={
    queryFun: async (req, res) => {
        axios.get('http://store.steampowered.com/api/appdetails?appids=1091500')
        .then(function (response) {
        // handle success
        var dat= response.data;
            res.send(dat);
            console.log(dat);
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
    }
}
