import "../styles/globals.css";
import Header from '../components/header'
import Footer from '../components/footer'

import {AuthProvider} from '../context/AuthContext'


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
    <content>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
  </content>
  </AuthProvider>
  )
}

export default MyApp;
