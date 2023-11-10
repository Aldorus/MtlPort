import {Field, ID, ObjectType} from '@nestjs/graphql';

@ObjectType({description: 'notification'})
export class Notification {
  @Field(() => ID)
  id: string;

  @Field()
  content: string;
}
