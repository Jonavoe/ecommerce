import React from 'react';
import Slider from 'react-slick';
import data from '../../../Data/Mouse';
import { Link } from 'react-router-dom';
import '../Carousel.css';

export const Mouse = () => {
	let settings = {
		infinite: true,
		slidesToShow: 4,
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
					{data.items.map((item) => (
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
