import { NotFoundException } from '@nestjs/common';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Container } from './models/container.model';
import { ContainersService } from './containers.service';
import { Boat } from '../boats/models/boat.model';

@Resolver((of) => Container)
export class ContainersResolver {
  constructor(private readonly containersService: ContainersService) {}

  @Query((returns) => Container)
  async container(@Args('id') id: string): Promise<Container> {
    const container = await this.containersService.findOneById(id);
    if (!container) {
      throw new NotFoundException(id);
    }
    return container;
  }

  @Query((returns) => [Container])
  containers(): Promise<Container[]> {
    return this.containersService.findAll();
  }

  @ResolveField()
  async hasFood(@Parent() container: Container): Promise<boolean> {
    return this.containersService.hasSupplyType(container, 'food');
  }

  @ResolveField()
  async hasMedical(@Parent() container: Container): Promise<boolean> {
    return this.containersService.hasSupplyType(container, 'medical');
  }
}
