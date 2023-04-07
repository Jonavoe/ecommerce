import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/DataProvider';
import { ProductoItem } from './ProductoItem';
import styles from './Producto.module.css';
// import teclados from '../../Data/Teclados';
// import motherboard from '../../Data/Motherboard';
// import mouse from '../../Data/Mouse';
import { findAllProducts } from '../../../../Api/src/controllers/products';

export const ProductoLista = () => {
	const [selector, setSelector] = useState('Productos');
	const value = useContext(DataContext);
	const [productos] = value.productos;

	const [productosItems, setProductosItems] = useState([]);

	useEffect(() => {
		async function fetchProductos() {
			const allProducts = await findAllProducts();
			setProductosItems(allProducts);
		}

		fetchProductos();
	}, []);

	const handleSelectorChange = (event) => {
		setSelector(event.target.value);
	};

	let productosFiltrados = productosItems;

	if (selector === 'Teclados') {
		productosFiltrados = productosItems.filter(
			(producto) => producto.category === 'teclados'
		);
	} else if (selector === 'Motherboard') {
		productosFiltrados = productosItems.filter(
			(producto) => producto.category === 'motherboard'
		);
	} else if (selector === 'Mouse') {
		productosFiltrados = productosItems.filter(
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
