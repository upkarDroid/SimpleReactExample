/* eslint-disable no-console */
import express from "express";
import {makeRequestPromise, makeAPIQuery} from "./route";
var app = express();


const router = express.Router();
router.route("*")
    .all((req, res) => {
        //set request headers here
        const url = "https://www.zomato.com/"+req.path+"?"+makeAPIQuery(req.query);
        makeRequestPromise(url)
            .then((data)=>{
                //set Response headers here 
                res.append('Access-Control-Allow-Origin', ['*']);
                res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
                res.append('Access-Control-Allow-Headers', 'Content-Type');
                res.json(data);
            })
        
    });
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });

// app.get("/", function(req, res) {
//     fs.readFile("mock.json", function(err, data) {
//         data = JSON.parse(data);
//         res.json(data);
//     });
// });
app.use(router);


app.listen(8080, () => {
    console.log(`runnning on 8080`);

});

