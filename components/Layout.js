import { Fragment } from 'react'

import Header from './Header'
import Footer from './Footer'
import Main from './Main'

import styles from './layout.module.scss'


export default function Layout({ children }) {
    return <Fragment> 
    
    <Header /> 
s
      <Main>

        {children}
      </Main>

      <Footer />

      </Fragment>

      

    

  }

  