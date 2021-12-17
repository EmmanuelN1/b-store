import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: {session, ...pageProps},
}){
  return (
    <SessionProvider session={session} refetchInterval={5 * 60  } >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  </SessionProvider>
  )
}
 

