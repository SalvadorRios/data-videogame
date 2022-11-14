const axios = require('axios');

module.exports={
    queryFun: async (req, res) => {
        axios.get('http://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=19F433438786C051485827AB4F7E2DB1&format=json')
        .then(function (response) {
        // handle success
        var dat=[]
        dat.push(response.data.applist.apps);
            res.send(dat);
            console.log(dat);
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
    }
}
