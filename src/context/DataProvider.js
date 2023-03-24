import React, { useState, useEffect, createContext } from 'react';
import Data from '../Data';
export const DataContext = createContext();

export const DataProvider = (props) => {
	const [productos, setProductos] = useState([]);
	const [menu, setMenu] = useState(false);
	const [carrito, setCarrito] = useState([]);

	useEffect(() => {
		const producto = Data.items;
		if (producto) setProductos(producto);
		else setProductos([]);
	}, []);

	const addCarrito = (id) => {
		const check = carrito.every((item) => {
			return item.id !== id;
		});
		if (check) {
			const data = productos.filter((producto) => {
				return producto.id === id;
			});
			setCarrito([...carrito, ...data]);
		} else {
			alert('El producto se ha añadido al carrito');
		}
	};

	function removeCarrito(id) {
		const newCarrito = carrito.filter((producto) => producto.id !== id);
		setCarrito(newCarrito);
	}

	useEffect(() => {
		const carrito = JSON.parse(localStorage.getItem('carrito'));
		if (carrito) {
			setCarrito(carrito);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('carrito', JSON.stringify(carrito));
	}, [carrito]);

	const value = {
		productos: [productos],
		menu: [menu, setMenu],
		carrito: [carrito, setCarrito],
		addCarrito: addCarrito,
		removeCarrito: removeCarrito,
	};

	return (
		<DataContext.Provider value={value}>{props.children}</DataContext.Provider>
	);
};
