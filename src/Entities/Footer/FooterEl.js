import React from 'react'
import { Footer } from 'react-materialize'
import './FooterEl.scss'

const FooterEl = () => {
    return (
        <Footer
            copyrights={`${new Date().getFullYear()} Copyright`}
        >
        </Footer>
    )
}
export default FooterEl