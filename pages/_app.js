import { wrapper } from '../redux/store'
import { AnimateSharedLayout } from 'framer-motion'
import '../styles/globals.css'
import '../styles/custom.scss'

function MyApp ({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  )
}
export default wrapper.withRedux(MyApp)
