import { Query as messageQuery, Mutation as messageMutation, Subscription as messageSubscription } from './messages.js';
import { Query as userQuery, Mutation as userMutation, Subscription as userSubscription } from './user.js';

export default {
  Query: {
    ...messageQuery,
    ...userQuery
  },
  Mutation: {
    ...messageMutation,
    ...userMutation
  },
  Subscription: {
    ...userSubscription,
    ...messageSubscription
  }
};