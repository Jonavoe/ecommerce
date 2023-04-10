import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import '../Carousel.css';

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
				'http://localhost:3001/mouses'
			);
			setMouses(productosMouses);
		};
		fetchProductos();
	}, []);

	let settings = {
		infinite: true,
		slidesToShow: 2,
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
		<div className='carouselContainer'>
			<h1 className='title'>Mouse</h1>
			<div className='slider'>
				<Slider {...settings}>
					{mouses.map((item) => (
						<div key={item.id}>
							<Link to={`/mouse/${item.id}`}>
								<img
									src={item.image}
									alt={item.title}
								/>
							</Link>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};
