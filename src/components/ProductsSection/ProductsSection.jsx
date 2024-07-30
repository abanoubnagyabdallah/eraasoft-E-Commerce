import { SwiperSlide,Swiper } from "swiper/react";
// import products from "../../data/product";
import ProductCard from "../ProductCard/ProductCard";
import "swiper/css";
import "./ProductsSection.css";

export default function ProductsSection({title,products}) {
  return (
    <div>
      <h2>{title}</h2>
      <div className="my-4">
        <Swiper
          slidesPerView={4}
          spaceBetween={24}
          loop={true}
          breakpoints={{
            1200: {
              slidesPerView: 4,
            },
            991: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            375:{
              slidesPerView:1
            }
          }}
        >
          {products.map((product) => {
            return (
              <SwiperSlide key={`prod-list-${product.id}`}>
                <ProductCard product={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
