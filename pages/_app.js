import '../styles/globals.css'
import Menu from '../components/ui/Menu'
function MyApp({ Component, pageProps }) {
  return (

    <>
    <Menu  />
    <Component {...pageProps} />
    
    </>
  )
  
  


}

export default MyApp
