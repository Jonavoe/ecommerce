import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../Carousel.css";

export const Motherboard = () => {
  const [productos, setProductos] = useState([]);

  const obtenerProductos = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchProductos = async () => {
      const productosMotherboards = await obtenerProductos(
        "https://ecommercews.onrender.com/motherboards"
      );
      setProductos(productosMotherboards);
    };
    fetchProductos();
  }, []);

  let settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 6000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
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
      <div className="img">
        <img
          alt="banner"
          className="banner"
          src="https://i.postimg.cc/7Z4kS962/BYTE-BUILDERS.png"
        />
      </div>
      <h1 className="title">Motherboard</h1>
      <div className="slider">
        <Slider {...settings}>
          {productos.map((item) => (
            <div key={item.id}>
              <Link to={`/motherboard/${item.id}`}>
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
