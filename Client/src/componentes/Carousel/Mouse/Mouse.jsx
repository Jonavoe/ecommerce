import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../Carousel.css";

export const Mouse = () => {
  const [mouses, setMouses] = useState([]);

  const obtenerProductos = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchProductos = async () => {
      const productosMouses = await obtenerProductos(
        "https://ecommercews.onrender.com/mouses"
      );
      setMouses(productosMouses);
    };
    fetchProductos();
  }, []);

  let settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerMode: true,
        },
      },
    ],
  };
  
  return (
    <div className="carouselContainer">
      <h1 className="title">Mouse</h1>
      <div className="slider">
        <Slider {...settings}>
          {mouses.map((item) => (
            <div key={item.id}>
              <Link to={`/mouse/${item.id}`}>
                <img src={item.image} alt={item.title} />
              </Link>
              <div className="title">
                <p>{item.title}</p>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
