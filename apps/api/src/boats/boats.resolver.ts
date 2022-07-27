import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Boat } from './models/boat.model';
import { BoatsService } from './boats.service';

@Resolver(of => Boat)
export class BoatsResolver {
  constructor(private readonly boatsService: BoatsService) {}

  @Query(returns => Boat)
  async boat(@Args('id') id: string): Promise<Boat> {
    const boat = await this.boatsService.findOneById(id);
    if (!boat) {
      throw new NotFoundException(id);
    }
    return boat;
  }

  @Query(returns => [Boat])
  boats(): Promise<Boat[]> {
    return this.boatsService.findAll();
  }
}
