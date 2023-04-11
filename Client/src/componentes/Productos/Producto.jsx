import React, { useEffect, useState } from 'react';
import { ProductoItem } from './ProductoItem';
import styles from './Producto.module.css';

export const ProductoLista = ({ agregarAlCarrito }) => {
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
				'https://ecommerce-production-dcb7.up.railway.app/motherboards'
			);
			productosMotherboards.forEach((producto) => producto.id);
			const productosTeclados = await obtenerProductos(
				'https://ecommerce-production-dcb7.up.railway.app/teclados'
			);
			productosTeclados.forEach((producto) => producto.id);
			const productosMouses = await obtenerProductos(
				'https://ecommerce-production-dcb7.up.railway.app/mouses'
			);
			productosMouses.forEach((producto) => producto.id);
			const productosOther = await obtenerProductos(
				'https://ecommerce-production-dcb7.up.railway.app/other'
			);
			productosMouses.forEach((producto) => producto.id);
			setProductos([
				...productosMotherboards,
				...productosTeclados,
				...productosMouses,
				...productosOther,
			]);
		};
		obtenerTodo();
	}, []);

	const eliminarProducto = async (id, category) => {
		const url = `https://ecommerce-production-dcb7.up.railway.app/${category}/${id}`;
		try {
			const response = await fetch(url, {
				method: 'DELETE',
			});
			if (response.ok) {
				const nuevosProductos = productos.filter(
					(producto) => producto.id !== id
				);
				setProductos(nuevosProductos);
				alert('Producto eliminado correctamente');
			} else {
				throw new Error(`Error eliminando producto con ID ${id}`);
			}
		} catch (error) {
			console.error(error);
			alert(`Error eliminando producto con ID ${id}`);
		}
	};

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
						agregarAlCarrito={agregarAlCarrito}
						eliminarProducto={eliminarProducto}
					/>
				))}
			</div>
		</div>
	);
};

export default ProductoLista;

// const eliminarMotherboard = async (id) => {
// 	try {
// 		const response = await fetch(`http://localhost:3001/motherboards/${id}`, {
// 			method: 'DELETE',
// 		});
// 		if (response.ok) {
// 			const nuevosProductos = productos.filter(
// 				(producto) => producto.id !== id
// 			);
// 			setProductos(nuevosProductos);
// 			alert('Producto eliminado correctamente');
// 		} else {
// 			throw new Error(`Error eliminando producto con ID ${id}`);
// 		}
// 	} catch (error) {
// 		console.error(error);
// 		alert(`Error eliminando producto con ID ${id}`);
// 	}
// };

// const eliminarMouse = async (id) => {
// 	try {
// 		const response = await fetch(`http://localhost:3001/mouses/${id}`, {
// 			method: 'DELETE',
// 		});
// 		if (response.ok) {
// 			const nuevosProductos = productos.filter(
// 				(producto) => producto.id !== id
// 			);
// 			setProductos(nuevosProductos);
// 			alert('Producto eliminado correctamente');
// 		} else {
// 			throw new Error(`Error eliminando producto con ID ${id}`);
// 		}
// 	} catch (error) {
// 		console.error(error);
// 		alert(`Error eliminando producto con ID ${id}`);
// 	}
// };

// const eliminarTeclado = async (id) => {
// 	try {
// 		const response = await fetch(`http://localhost:3001/teclados/${id}`, {
// 			method: 'DELETE',
// 		});
// 		if (response.ok) {
// 			const nuevosProductos = productos.filter(
// 				(producto) => producto.id !== id
// 			);
// 			setProductos(nuevosProductos);
// 			alert('Producto eliminado correctamente');
// 		} else {
// 			throw new Error(`Error eliminando producto con ID ${id}`);
// 		}
// 	} catch (error) {
// 		console.error(error);
// 		alert(`Error eliminando producto con ID ${id}`);
// 	}
// };

// const eliminarOther = async (id) => {
// 	try {
// 		const response = await fetch(`http://localhost:3001/others/${id}`, {
// 			method: 'DELETE',
// 		});
// 		if (response.ok) {
// 			const nuevosProductos = productos.filter(
// 				(producto) => producto.id !== id
// 			);
// 			setProductos(nuevosProductos);
// 			alert('Producto eliminado correctamente');
// 		} else {
// 			throw new Error(`Error eliminando producto con ID ${id}`);
// 		}
// 	} catch (error) {
// 		console.error(error);
// 		alert(`Error eliminando producto con ID ${id}`);
// 	}
// };
