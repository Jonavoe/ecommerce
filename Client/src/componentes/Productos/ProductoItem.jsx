import React, { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import styles from './ProductoItem.module.css';
import { Link } from 'react-router-dom';

export const ProductoItem = ({ id, title, price, image, category }) => {
	const value = useContext(DataContext);
	const addCarrito = value.addCarrito;

	return (
		<div className={styles.producto}>
				<div className={styles.producto__img}>
					<Link to={`/${category}/${id}`}>
						<img
							src={image}
							alt={title}
						/>
					</Link>
				</div>
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
					to={`/${category}/${id}`}
					className={styles.btn}>
					Vista
				</Link>
			</div>
		</div>
	);
};
