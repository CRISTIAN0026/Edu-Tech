import gql from "graphql-tag";

export const LOGIN_USER = gql`
mutation Mutation($loginInput: LoginInput){
  loginUser(loginInput: $loginInput) {
    username
    email
    token
  }
}
`

export const PERSON_LOGIN = gql`
subscription {
  personLogin {
    email
    username
  }
}
`
export const SEND_MESSAGE = gql`
mutation Mutation($messageInput: MessageInput) {
    createMessage (messageInput: $messageInput) {
      createdBy
      text
    }
  }
`

export const REGISTER_USER = gql`
  mutation Mutation($registerInput: RegisterInput) {
    registerUser(registerInput: $registerInput) {
      username
      email
      token
      type
    }
  }
`;
export const GET_MESSAGES = gql`
query GetMessages {
    getMessages {
      text
      date
      createdBy
      typeUser
      emailBy
    }
  }
  `
export const GET_USER = gql`
query User($userId: ID!) {
  user(id: $userId) {
    username
    type
    email
  }
}
`