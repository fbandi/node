const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Weclome to the home page baby");
});

app.listen(3000,() => {
    console.log("wazzappp");
});
