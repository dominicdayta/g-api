const port = process.env.PORT || 3000;
const express = require('express');
const app = express();

const gdata = require('./data/members');
const memberModel = require('./models/members');

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/api/members', (req, res) => {
    res.send(gdata);
});

app.get('/api/members/:id',(req,res) => {
    let id = parseInt(req.params.id);
    let selectedMember = memberModel.filterById(id,gdata);
    if(! selectedMember.id) res.status(404).send("The ID could not be matched with a member in our database");
    res.send(selectedMember)
});

app.get('/api/members/:id/positions',(req,res) => {
    let id = parseInt(req.params.id);
    let selectedPosition = memberModel.positionById(id,gdata);

    if(selectedPosition.length == 0) res.status(404).send("The ID could not be matched with a member in our database");
    res.send(selectedPosition)
});


app.listen(port, () => console.log(`Listening on Port ${port}...`));