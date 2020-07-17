import React from 'react'
import { Provider } from 'react-redux'
import store from '@store'
import 'antd/dist/antd.css'
// import '@assets/css/reset.css'
import '@assets/css/app.css'
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
)

export default App
