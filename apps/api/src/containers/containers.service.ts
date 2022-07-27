import { Injectable } from '@nestjs/common';
import { Container } from './models/container.model';
import * as containers from '../../data/containers.json';

@Injectable()
export class ContainersService {
  async findOneById(id: string): Promise<Container> {
    return containers.find(c => c.id === id);
  }

  async findAll(): Promise<Container[]> {
    return containers;
  }
}
