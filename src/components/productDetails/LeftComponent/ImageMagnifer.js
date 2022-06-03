import React from 'react'
import ReactImageMagnify from 'react-image-magnify';
import { isMobile } from 'react-device-detect';

export default function ImageMagnifer({ image }) {
    return (
        <div>
            <ReactImageMagnify
            imageStyle={{
                borderRadius: isMobile ? '20px' : '20px 8px 0px 20px'
            }} 
                enlargedImagePosition="over"
                isHintEnabled
            {...{
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: image
                },
                largeImage: {
                    src: image,
                    width: 1200,
                    height: 1800
                }
            }} />
            {/* <img src={image} /> */}
        </div>
    )
}
