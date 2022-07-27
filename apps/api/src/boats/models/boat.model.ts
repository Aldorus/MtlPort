import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'boat' })
export class Boat {
  @Field((type) => ID)
  id: string;

  @Field()
  name?: string;
}
