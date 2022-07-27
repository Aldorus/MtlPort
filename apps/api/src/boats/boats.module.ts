import { Module } from '@nestjs/common';
import { BoatsService } from './boats.service';
import { BoatsResolver } from './boats.resolver';

@Module({
  providers: [BoatsResolver, BoatsService],
})
export class BoatsModule {}
