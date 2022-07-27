import { Injectable } from '@nestjs/common';
import { Container } from './models/container.model';
import * as containers from '../../data/containers.json';
import { Boat } from '../boats/models/boat.model';

@Injectable()
export class ContainersService {
  async findOneById(id: string): Promise<Container> {
    return containers.find((c) => c.id === id);
  }

  async findAll(): Promise<Container[]> {
    return containers;
  }

  async findByBoatId(boatId: Boat['id']): Promise<Container[]> {
    return containers.filter(c => c.boat?.id === boatId);
  }
}
