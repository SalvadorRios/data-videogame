const axios = require('axios');

module.exports={
    queryFun: async (req, res) => {
        SearchId=req.query.id;
        // console.log('DATA RECIBIDA', SearchId);
        axios.get('http://store.steampowered.com/api/appdetails?appids='+SearchId)
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
