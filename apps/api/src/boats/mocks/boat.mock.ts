import {rand, randFullName, randNumber, randUuid} from '@ngneat/falso';
import { Boat } from '../models/boat.model';

export const createBoat = (): Boat => ({
  id: randUuid(),
  name: randFullName(),
  transitStatus: rand(['incoming', 'arrived']),
  timeOfArrival: `${randNumber({min: 0, max: 2})} days`,
});
