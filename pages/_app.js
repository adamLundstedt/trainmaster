import Layout from '../layout/Layout'
import '../styles/globals.css'
import { useEffect } from 'react'
import { useStates } from '../lib/states'



function MyApp({ Component, pageProps }) {
  let s =  useStates('main', { 
    routes: [],
    users: []
  })
  useEffect(() => {
    (async () => {
      s.routes = await (await fetch('/api/routeIndex')).json()
      s.users = await (await fetch('/api/userIndex')).json()
      console.log(s.routes)
    })()
  }, []) 
  
 

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>)
}

export default MyApp

