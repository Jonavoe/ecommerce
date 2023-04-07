import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/DataProvider';
import { ProductoItem } from './ProductoItem';
import styles from './Producto.module.css';
import teclados from '../../Data/Teclados';
import motherboard from '../../Data/Motherboard';
import mouse from '../../Data/Mouse';
const axios = require('axios');

export const ProductoLista = () => {
	const [selector, setSelector] = useState('Productos');
	const value = useContext(DataContext);
	const [productos] = value.productos;



axios.get('http://localhost:3000/motherboard')
  .then(response => {
    const productos = response.data;
    console.log(productos);
  })
  .catch(error => {
    console.error(error);
  });

	const handleSelectorChange = (event) => {
		setSelector(event.target.value);
	};

	let productosFiltrados = productos;

	if (selector === 'Teclados') {
		productosFiltrados = teclados.items;
	} else if (selector === 'Motherboard') {
		productosFiltrados = motherboard.items;
	} else if (selector === 'Mouse') {
		productosFiltrados = mouse.items;
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
