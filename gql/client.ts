import { gql } from '@apollo/client'
import * as ApolloReactCommon from '@apollo/client'
import * as ApolloReactHooks from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Query = {
  __typename?: 'Query'
  helloWorld: Scalars['String']
}

export type HelloWorldQueryVariables = Exact<{ [key: string]: never }>

export type HelloWorldQuery = { __typename?: 'Query' } & Pick<Query, 'helloWorld'>

export const HelloWorldDocument = gql`
  query helloWorld {
    helloWorld
  }
`

/**
 * __useHelloWorldQuery__
 *
 * To run a query within a React component, call `useHelloWorldQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloWorldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloWorldQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloWorldQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<HelloWorldQuery, HelloWorldQueryVariables>,
) {
  return ApolloReactHooks.useQuery<HelloWorldQuery, HelloWorldQueryVariables>(
    HelloWorldDocument,
    baseOptions,
  )
}
export function useHelloWorldLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HelloWorldQuery, HelloWorldQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<HelloWorldQuery, HelloWorldQueryVariables>(
    HelloWorldDocument,
    baseOptions,
  )
}
export type HelloWorldQueryHookResult = ReturnType<typeof useHelloWorldQuery>
export type HelloWorldLazyQueryHookResult = ReturnType<typeof useHelloWorldLazyQuery>
export type HelloWorldQueryResult = ApolloReactCommon.QueryResult<
  HelloWorldQuery,
  HelloWorldQueryVariables
>
