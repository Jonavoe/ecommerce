import React, { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import styles from './ProductoItem.module.css';
import { Link } from 'react-router-dom';

export const ProductoItem = ({ id, title, price, image, category }) => {
	const value = useContext(DataContext);
	const addCarrito = value.addCarrito;

	return (
		<div className={styles.producto}>
			<Link href='/'>
				<div className={styles.producto__img}>
					<img
						src={image}
						alt={title}
					/>
				</div>
			</Link>
			<div className={styles.producto__footer}>
				<h1> {title}</h1>
				<p> {category} </p>
				<p className={styles.price}> ${price} </p>
			</div>
			<div className={styles.button}>
				<button
					className={styles.btn}
					onClick={() => addCarrito(id)}>
					AÑADIR AL CARRITO
				</button>
				<Link
					href='/'
					className={styles.btn}>
					Vista
				</Link>
			</div>
		</div>
	);
};
