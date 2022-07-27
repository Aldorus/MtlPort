import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Container } from '../../containers/models/container.model';

@ObjectType({ description: 'boat' })
export class Boat {
  @Field(() => ID)
  id: string;

  @Field()
  name?: string;

  @Field(() => [Container], { nullable: true })
  containers?: Container[];

  @Field({ nullable: true })
  containerCount?: number;

  @Field( { nullable: true })
  transitStatus?: string;

  @Field( { nullable: true })
  timeOfArrival?: string;
}
