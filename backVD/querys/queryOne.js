const axios = require('axios');

module.exports={
    queryFun: async (req, res) => {
        SearchId=req.query.id;
        console.log('DATA RECIBIDA', req);
        // axios.get('https://api.rawg.io/api/games/'+3498+'?key=402a1e152e0d4f6cb77a8e6b3f461704')
        // .then(function (response) {
        // // handle success
        // var dat= response.data;
        //     res.send(dat);
        //     console.log(dat);
        // })
        // .catch(function (error) {
        // // handle error
        // console.log(error);
        // })
    }
}
