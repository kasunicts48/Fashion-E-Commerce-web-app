import React from 'react'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'

export default function CommonLayout(prop) {
    return (
        <div>
            <Header />
            <div style={{padding: "0 8%",marginTop: '80px'}}>
                {prop.children}
            </div>
            <Footer />
        </div>
    )
}
