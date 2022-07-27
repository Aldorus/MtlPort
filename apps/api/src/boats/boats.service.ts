import {Injectable} from '@nestjs/common';
import {Boat} from './models/boat.model';
import * as boats from '../../data/boats.json';

@Injectable()
export class BoatsService {
  async findOneById(id: string): Promise<Boat> {
    return boats.find(b => b.id === id);
  }

  async findAll(): Promise<Boat[]> {
    return boats;
  }
}
