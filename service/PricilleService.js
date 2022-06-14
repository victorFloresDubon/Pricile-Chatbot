//const { ServerConf } = require("../server/server-conf");
const HttpClient = require('request')

class PricilleService {

    async getAllProducts () {
        HttpClient.get(ServerConf.url, {json: true}, function (err, response, body) {
                if (err) {
                    return console.dir(err)
                }

                //console.dir(JSON.parse(body))
                console.dir(body.explanation)
                return body.explanation;
            })        
    }

    async predecirPrecios() {
        HttpClient.get(ServerConf.url, {json: true}, function(err, response, body) {
            if(err){
                return console.dir(err);
            }
            return body.explanation;
        })
    }
}


