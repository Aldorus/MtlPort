import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Boat } from '../../boats/models/boat.model';

@ObjectType({ description: 'container' })
export class Container {
  @Field(() => ID)
  id: string;

  @Field()
  content?: string;

  @Field(() => Boat, { nullable: true })
  boat?: Boat;
}
