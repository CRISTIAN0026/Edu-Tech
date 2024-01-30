import Message from '../../models/Message.js';
import User from '../../models/User.js';
const { findById } = Message
import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();

const SUBSCRIPTION_EVENTS = {
    SEND_MESSAGE: 'SEND_MESSAGE'
}

const Mutation = {
    async createMessage(_, { messageInput: { text, createdBy } }, context) {
        const user = await User.findById(createdBy);
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZone: 'America/Bogota'
          };
        const today = new Date();
        const formattedTime = new Intl.DateTimeFormat('es-CO', options).format(today);

        const newMessage = new Message({
            text: text,
            createdBy: user?.username,
            date: formattedTime.toString(),
            typeUser: user?.type,
            emailBy: user?.email
        });


        const res = await newMessage.save();
        pubsub.publish(SUBSCRIPTION_EVENTS.SEND_MESSAGE, { sendMessage: res })
        return {
            id: res.id,
            ...res._doc
        };
    }
};

const Subscription = {
    sendMessage: {
        subscribe: () => pubsub.asyncIterator([SUBSCRIPTION_EVENTS.SEND_MESSAGE])
    },
};

const Query = {
    message: (_, { ID }) => findById(ID),
    getMessages: async () => await Message.find(),
};

export {
    Query,
    Mutation,
    Subscription
  };