import { randFullName, randUuid } from '@ngneat/falso';
import { Boat } from '../models/boat.model';

export const createBoat = (): Boat => ({
  id: randUuid(),
  name: randFullName(),
});
