import React, { useEffect, useState } from 'react';
import { ProductoItem } from './ProductoItem';
import styles from './Producto.module.css';

export const ProductoLista = () => {
	const [selector, setSelector] = useState('Productos');

	const [productos, setProductos] = useState([]);

	const obtenerProductos = async (url) => {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	};

	useEffect(() => {
		const obtenerTodo = async () => {
			const productosMotherboards = await obtenerProductos(
				'http://localhost:3001/motherboards'
			);
			productosMotherboards.forEach((producto) => (producto.id));
			const productosTeclados = await obtenerProductos(
				'http://localhost:3001/teclados'
			);
			productosTeclados.forEach((producto) => (producto.id));
			const productosMouses = await obtenerProductos(
				'http://localhost:3001/mouses'
			);
			productosMouses.forEach((producto) => (producto.id));
			const productosOther = await obtenerProductos(
				'http://localhost:3001/other'
			);
			productosMouses.forEach((producto) => (producto.id));
			setProductos([
				...productosMotherboards,
				...productosTeclados,
				...productosMouses,
				...productosOther,

			]);
		};
		obtenerTodo();
	}, []);

	const handleSelectorChange = (event) => {
		setSelector(event.target.value);
	};

	let productosFiltrados = productos;

	if (selector === 'Teclados') {
		productosFiltrados = productos.filter(
			(producto) => producto.category === 'teclados'
		);
	} else if (selector === 'Motherboard') {
		productosFiltrados = productos.filter(
			(producto) => producto.category === 'motherboard'
		);
	} else if (selector === 'Mouse') {
		productosFiltrados = productos.filter(
			(producto) => producto.category === 'mouse'
		);
	}

	return (
		<div>
			<div className={styles.containerTitle}>
				<h1 className={styles.title}>
					<select
						className={styles.select}
						value={selector}
						onChange={handleSelectorChange}>
						<option
							className={styles.option}
							value='Productos'>
							Productos
						</option>
						<option
							className={styles.option}
							value='Teclados'>
							Teclados
						</option>
						<option
							className={styles.option}
							value='Motherboard'>
							Motherboard
						</option>
						<option
							className={styles.option}
							value='Mouse'>
							Mouse
						</option>
					</select>
				</h1>
			</div>
			<div className={styles.productos}>
				{productosFiltrados.map((producto) => (
					<ProductoItem
						key={producto.id}
						id={producto.id}
						title={producto.title}
						price={producto.price}
						image={producto.image}
						category={producto.category}
						cantidad={producto.cantidad}
					/>
				))}
			</div>
		</div>
	);
};

export default ProductoLista;
