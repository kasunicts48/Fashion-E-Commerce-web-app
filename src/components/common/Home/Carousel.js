import React from 'react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import image1 from '../../../images/carousel/image1.png'
import newarrivals from '../../../images/carousel/newarrivals.jpg'
import image3 from '../../../images/carousel/image3.png'

export default function Carousel() {
    return (
        <div>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={28}
                totalSlides={3}
                isPlaying
            >
                <Slider>
                <Slide index={0}><img src={image1} alt="" style={{width: '100%'}} /></Slide>
                <Slide index={1}><img src={newarrivals} alt="" style={{width: '100%'}}/></Slide>
                <Slide index={2}><img src={image3} alt="" style={{width: '100%'}}/></Slide>
                </Slider>
            </CarouselProvider>
            

        </div>
    )
}
