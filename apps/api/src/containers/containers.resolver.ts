import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Container } from './models/container.model';
import { ContainersService } from './containers.service';


@Resolver(of => Container)
export class ContainersResolver {
  constructor(private readonly containersService: ContainersService) {}

  @Query(returns => Container)
  async container(@Args('id') id: string): Promise<Container> {
    const container = await this.containersService.findOneById(id);
    if (!container) {
      throw new NotFoundException(id);
    }
    return container;
  }

  @Query(returns => [Container])
  containers(): Promise<Container[]> {
    return this.containersService.findAll();
  }
}
