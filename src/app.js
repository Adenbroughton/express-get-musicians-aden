const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 

app.get("/musicians", async (request, respond) => {
    const musician = await Musician.findAll ();
    respond.json(musician);
})

app.get("/musicians/:id", async (request, response) => {
    const number = request.params.id;
    const musician = await Musician.findByPk(number);
    response.json(musician);
}
)



module.exports = app;