import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import '../Carousel.css';

export const Teclados = () => {
	const [teclados, setTeclados] = useState([]);

	const obtenerProductos = async (url) => {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	};

	useEffect(() => {
		const fetchProductos = async () => {
			const productosTeclados = await obtenerProductos(
				'http://localhost:3001/teclados'
			);
			setTeclados(productosTeclados);
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
		<div className='carouselContainer'>
			<h1 className='title'>Teclados</h1>
			<div className='slider'>
				<Slider {...settings}>
					{teclados.map((item) => (
						<div key={item.id}>
							<Link to={`/teclados/${item.id}`}>
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
