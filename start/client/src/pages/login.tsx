import React from "react";
import gql from "graphql-tag";
import * as LoginTypes from "./__generated__/login";
import { useMutation } from "@apollo/react-hooks";
import { LoginForm } from "../components";

export const LOGIN_USER = gql`
  mutation login($email: String!) {
    login(email: $email)
  }
`;

export default function Login() {
  const [login, { data }] = useMutation<
    LoginTypes.login,
    LoginTypes.loginVariables
  >(LOGIN_USER);
  return <LoginForm login={login} />;
}
