import { NotFoundException } from '@nestjs/common';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Boat } from './models/boat.model';
import { BoatsService } from './boats.service';
import { ContainersService } from '../containers/containers.service';
import { Container } from '../containers/models/container.model';

@Resolver((of) => Boat)
export class BoatsResolver {
  constructor(
    private readonly boatsService: BoatsService,
    private readonly containersService: ContainersService
  ) {}

  @Query((returns) => Boat)
  async boat(@Args('id') id: string): Promise<Boat> {
    const boat = await this.boatsService.findOneById(id);
    if (!boat) {
      throw new NotFoundException(id);
    }
    return boat;
  }

  @Query((returns) => [Boat])
  async boats(): Promise<Boat[]> {
    return this.boatsService.findAll();
  }

  @ResolveField()
  async containers(@Parent() boat: Boat): Promise<Container[]> {
    return this.containersService.findByBoatId(boat.id);
  }

  @ResolveField()
  async containerCount(@Parent() boat: Boat): Promise<number> {
    const containers = await this.containersService.findByBoatId(boat.id);
    return containers.length;
  }
}
