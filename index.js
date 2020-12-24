var express = require("express");

var app = express();

const PORT = 3000;

// // Solution 1
// var data = ["Tony", "Lisa", "Michael", "Ginger", "Food"];
// app.get("/api", (_, res) => res.json(data));

// // Solution 2
// app.get("/api", function (request, response, callbackFunction) {
//     response.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
// });

// Solution 3
app.get("/api/users/getallusers", function middleware(request, response, callbackFunction) {
    response.json(["Tony", "Lisa", "Michael", "Rory", "Lauren"]);
});


app.listen(PORT, function jackRocks() {
    console.log("Server running! Go to http://localhost:" + PORT);
});
