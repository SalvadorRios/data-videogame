const axios = require('axios');

module.exports={
    queryGamesNext: async (req, res) => {
        
        SearchId=req.query.val;
        console.log('DATA RECIBIDA', SearchId);

        axios.get('https://api.rawg.io/api/games?key=402a1e152e0d4f6cb77a8e6b3f461704&page='+SearchId)
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
