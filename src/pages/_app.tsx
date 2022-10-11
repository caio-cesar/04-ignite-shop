import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import { store, persistor } from '../redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

globalStyles();

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  const component = getLayout(
      <Component {...pageProps} />
  )

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {component}
      </PersistGate>
    </Provider>
  )

}
