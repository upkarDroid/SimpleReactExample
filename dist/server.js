"use strict";
var _express = require("express");var _express2 = _interopRequireDefault(_express);
var _route = require("./route");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /* eslint-disable no-console */
var app = (0, _express2.default)();


var router = _express2.default.Router();
router.route("*").
all(function (req, res) {
    //set request headers here
    var url = "https://www.zomato.com/" + req.path + "?" + (0, _route.makeAPIQuery)(req.query);
    (0, _route.makeRequestPromise)(url).
    then(function (data) {
        //set Response headers here 
        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.append('Access-Control-Allow-Headers', 'Content-Type');
        res.json(data);
    });

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


app.listen(8080, function () {
    console.log("runnning on 8080");

});
//# sourceMappingURL=server.js.map