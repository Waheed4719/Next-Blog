import { wrapper } from '../redux/store'
import { ToastContainer } from 'react-toastify'
import '../styles/globals.css'
import '../styles/custom.scss'

function MyApp ({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page)


  return getLayout(
    <>
      <Component {...pageProps} />
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}
export default wrapper.withRedux(MyApp)
