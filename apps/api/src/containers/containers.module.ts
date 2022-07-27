import { Module } from '@nestjs/common';
import { ContainersService } from './containers.service';
import { ContainersResolver } from './containers.resolver';

@Module({
  providers: [ContainersService, ContainersResolver],
})
export class ContainersModule {}
