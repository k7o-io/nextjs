import React from 'react'

interface PreloadStylesheetProps {
  href: string
}

interface State {
  rel: string
  as?: string
  onLoad?: () => void
}

export const PreloadStylesheet: React.FC<PreloadStylesheetProps> = (props) => {
  const [state, setState] = React.useState<State>({
    rel: 'preload',
    as: 'style',
    onLoad: () => {
      setState({
        rel: 'stylesheet',
        as: undefined,
        onLoad: undefined,
      })
    },
  })
  return (
    <>
      <link rel={state.rel} as={state.as} onLoad={state.onLoad} href={props.href} />
      <noscript>
        <link rel='stylesheet' href={props.href} />
      </noscript>
    </>
  )
}

export default PreloadStylesheet
