import React from 'react';
import styles from './Inicio.module.css';
import { Motherboard } from '../Carousel/Motherboard/Motherboard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Teclados } from '../Carousel/Teclados/Teclados';

export const Inicio = () => {
	return (
		<div className={styles.inicio}>
			<div>
				<Motherboard />
				<Teclados />
			</div>
		</div>
	);
};
