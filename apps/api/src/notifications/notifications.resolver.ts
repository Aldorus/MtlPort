import {Args, Mutation, Resolver, Subscription} from '@nestjs/graphql';
import {Notification} from './models/notification.model';
import {PubSub} from "graphql-subscriptions";

const pubSub = new PubSub();
@Resolver((of) => Notification)
export class NotificationsResolver {
  @Subscription(returns => Notification)
  notificationAdded() {
    return pubSub.asyncIterator('notificationAdded');
  }

  @Mutation(returns => Notification)
  async sendNotification(@Args('content') content: string) {
    console.log('content', content);
    const notification = {id: '3', content};
    pubSub.publish('notificationAdded', {
      notificationAdded: notification,
    });
    return notification;
  }
}
