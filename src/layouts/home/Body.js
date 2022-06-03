//carasol
//tagline
//button row

import React from 'react'
import Carousel from '../../components/common/Home/Carousel'
import TagLine from '../../components/common/Home/TagLine'
import ButtonRow from '../../components/common/Home/ButtonRow'


export default function Body() {
    return (
        <div style={{marginTop: "10px"}}>
            <Carousel />
            <div style={{marginTop: '3%'}}>

            </div>
            <TagLine />
            <ButtonRow />
        </div>
    )
}
