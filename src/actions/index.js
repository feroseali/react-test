import config from './config'
import _ from 'lodash'


import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: config.SERVER_API_URL
});


export const signUpAction = (payload) => {
  var data
  client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(function (result) {
      alert("Signup success")
  })
  .catch(function (error) {
      alert(error)
  });
  return data
}

export const loginAction = (payload) => {
  var data
  client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(function (result) {
      alert("Login Success")
  })
  .catch(function (error) {
      alert(error)
  });
  return data
}
