import { randNumber } from '@ngneat/falso';
import { createBoat } from '../src/boats/mocks/boat.mock';
import { createContainer } from '../src/containers/mocks/container.mock';
import * as fs from "fs";

console.log('Hello');

// Create Boats
const boats = new Array(randNumber({ min: 2, max: 4 }))
  .fill({})
  .map(createBoat);
fs.writeFile('./apps/api/data/boats.json', JSON.stringify(boats), 'utf8', () => {});

// Create few containers for each boat and a tons for the port
const containers = boats.reduce((acc, boat) => {
  return [
    ...acc,
    ...new Array(randNumber({ min: 100, max: 250 }))
      .fill({})
      .map(() => createContainer({ boat })),
  ];
}, new Array(randNumber({ min: 10, max: 35 })).fill({}).map(createContainer));
fs.writeFile('./apps/api/data/containers.json', JSON.stringify(containers), 'utf8', () => {});
