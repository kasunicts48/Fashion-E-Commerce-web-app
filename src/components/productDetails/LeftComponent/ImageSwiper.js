import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import Image1 from "../../../images/productsImgs/product1.jpg";
import Image2 from "../../../images/productsImgs/product2.jpg";
import Image3 from "../../../images/productsImgs/product3.jpg";
import Image4 from "../../../images/productsImgs/product4.jpg";
import Image5 from "../../../images/productsImgs/product5.jpg";
import Image6 from "../../../images/productsImgs/product6.jpg";
import Image7 from "../../../images/productsImgs/product7.jpg";
import Image8 from "../../../images/productsImgs/product8.jpg";
import Image9 from "../../../images/productsImgs/product9.jpg";
import Image10 from "../../../images/productsImgs/product10.jpg";
import Image11 from "../../../images/productsImgs/product11.jpg";
import Image12 from "../../../images/productsImgs/product12.jpg";
import ImageMagnifer from "./ImageMagnifer";

SwiperCore.use([Pagination]);

const imageArray = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12
];

export default function ImageSwiper({images}) {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((val, key) => {
          return (
            <SwiperSlide key={key} style={{ width: "600px" }}>
              <ImageMagnifer image={imageArray[val]} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
