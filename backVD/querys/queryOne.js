const axios = require('axios');

module.exports={
    queryFun: async (req, res) => {
        let dato= ''
        dato=req.body
        console.log('DATA RECIBIDA', req);
        // axios.get('http://store.steampowered.com/api/appdetails?appids='+req)
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
