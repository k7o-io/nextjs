// https://nextjs.org/docs/advanced-features/custom-app

import React from 'react'
import { AppProps } from 'next/app'
import { CssBaseline } from '@material-ui/core'
import Head from 'next/head'
import { Header, PreloadStylesheet } from '@/components'
import { SWRConfig } from 'swr'
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: '/api/graphql',
    }),
  })
  return (
    <>
      <Head>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        <PreloadStylesheet href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
        <PreloadStylesheet href='https://fonts.googleapis.com/icon?family=Material+Icons' />
      </Head>
      <CssBaseline />
      <Header />
      <SWRConfig
        value={{
          fetcher: (key: string) => fetch(key).then((res) => res.json()),
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
        }}
      >
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>{' '}
      </SWRConfig>
    </>
  )
}

export default App
