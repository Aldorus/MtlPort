import { Module } from '@nestjs/common';
import { BoatsService } from './boats.service';
import { BoatsResolver } from './boats.resolver';
import { ContainersService } from '../containers/containers.service';

@Module({
  providers: [BoatsResolver, BoatsService, ContainersService],
})
export class BoatsModule {}
