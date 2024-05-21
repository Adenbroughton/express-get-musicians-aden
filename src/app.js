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
app.post("/musicians", async (request, response) => {
    const restaurant = await Musician.create(request.body);
    response.json(restaurant);
});

app.put("/musicians/:id", async (request, response) => {
    const updatedRest = await Musician.update(request.body, {where: {id: request.params.id}
    });
    response.json(updatedRest);
})

app.delete("/musicians/:id", async (request, response) => {
    const deletedRest = await Musician.destroy({where: {id: request.params.id}
    });
    response.json(deletedRest);
})


module.exports = app;