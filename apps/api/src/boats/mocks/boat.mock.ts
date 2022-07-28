import {rand, randFullName, randNumber, randUuid} from '@ngneat/falso';
import { Boat } from '../models/boat.model';

export const createBoat = (): Boat => {
  const transitStatus = rand(['incoming', 'arrived'])
  return ({
    id: randUuid(),
    name: randFullName(),
    transitStatus,
    timeOfArrival: transitStatus === 'incoming' ? randNumber({min: 0, max: 2}) : undefined,
  });
}
