// React
import { useEffect, useState } from 'react';
// React Response
import { useMediaQuery } from 'react-responsive';
// Swiperjs
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Components
import { AmazonCard1 } from './';
// Database
import { dbProducts } from '@/database';
// Styles
import 'swiper/css';
import 'swiper/css/pagination';


export const CardGrid3 = ({ products = [] }) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const [ slidesToShow, setSlidesToShow ] = useState( 1 );

  useEffect(() => {
    setSlidesToShow( isDesktop ? 4 : 1 );
  }, [ isDesktop ]);

  return (
    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-4 g-4">
      <Swiper
        slidesPerView={ slidesToShow }
        pagination={{
          clickable: true,
        }}
        modules={[ Pagination ]}
        className="mySwiper"
      >
        {
          products.map( product => (
            <SwiperSlide
              key={ product.id }
            >
              <div
                className="col my-4"
              >
                <AmazonCard1
                  cardTitle={ product.name }
                  cardImage={ product.img }
                  cardPrice={ product.price }
                  cardDestination={ product.url }
                />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}
