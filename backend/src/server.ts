import express from 'express';
import { getRepository } from 'typeorm';
import './database/connection';
import Orphanage from './models/Orphanage';



const app = express();
app.use(express.json());

app.post('/orphanages', (request, response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  } = request.body;

  const orphanagesRepository = getRepository(Orphanage);

  const orphanage  = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  });

  orphanagesRepository.save(orphanage);

  return response.json(orphanage);
})


app.listen(3333);
