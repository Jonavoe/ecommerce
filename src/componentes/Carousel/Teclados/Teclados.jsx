import React from 'react';
import Slider from 'react-slick';
import data from '../../../Data/Teclados';
import { Link } from 'react-router-dom';
import '../Carousel.css';

export const Teclados = () => {
	let settings = {
		infinite: true,
		slidesToShow: 3,
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
			<div className='slider'>
				<Slider
					{...settings}>
					{data.items.map((item) => (
						<div key={item.id}>
							<Link to='/productos'>
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
