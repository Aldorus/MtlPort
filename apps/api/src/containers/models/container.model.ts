import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Boat } from '../../boats/models/boat.model';

@ObjectType({description: 'supply'})
export class Supply {
  @Field()
  declaredType: string

  @Field()
  correctedType: string

  @Field()
  probability: number
}

@ObjectType({ description: 'container' })
export class Container {
  @Field(() => ID)
  id: string;

  @Field(() => [Supply])
  content?: Supply[];

  @Field(() => Boat, { nullable: true })
  boat?: Boat

  @Field()
  hasFood?: boolean

  @Field()
  hasMedical?: boolean

  @Field()
  timeToLoad?: number

}
