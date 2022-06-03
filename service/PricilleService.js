//const { ServerConf } = require("../server/server-conf");
const HttpClient = require('request')

class PricilleService {

    async getAllProducts () {
        HttpClient.get(ServerConf.url, (err, response, body) => {
            if(err){
                return console.dir(err)
            }
        
            console.dir(JSON.parse(body))
        })        
    }

}


