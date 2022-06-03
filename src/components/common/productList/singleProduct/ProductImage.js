import React from 'react'
import image1 from '../../../../images/productsImgs/product1.jpg'
import image2 from '../../../../images/productsImgs/product2.jpg'
import image3 from '../../../../images/productsImgs/product3.jpg'
import image4 from '../../../../images/productsImgs/product4.jpg'
import image5 from '../../../../images/productsImgs/product5.jpg'
import image6 from '../../../../images/productsImgs/product6.jpg'
import image7 from '../../../../images/productsImgs/product7.jpg'
import image8 from '../../../../images/productsImgs/product8.jpg'
import image9 from '../../../../images/productsImgs/product9.jpg'
import image10 from '../../../../images/productsImgs/product10.jpg'
import image11 from '../../../../images/productsImgs/product11.jpg'
import image12 from '../../../../images/productsImgs/product12.jpg'

const imageArray = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
];

export default function ProductImage({ ProductImage,ProductName  }) {

    const [imageSrc, setImageSrc] = React.useState(imageArray[ProductImage[0]]);

    return (
        <div style={{height: '355px'}}>
            <img src={imageSrc} alt={ProductName} style={{ 
                width: 'auto',
                maxHeight: '350px',
                height: 'auto',
                padding: '20px',
                borderRadius: '25px',
                objectFit: 'contain'
                }}
                
                onMouseOver={() => setImageSrc(imageArray[ProductImage[1]])}
                onMouseOut={() => setImageSrc(imageArray[ProductImage[0]])}
                />

                
        </div>
    )
}
