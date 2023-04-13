import React, { useState } from 'react';
import 'boxicons';
import { Route, Routes } from 'react-router-dom';
import ProductoLista from './componentes/Productos/Producto';
import Header from './componentes/Header/Header';
import { Carrito } from './componentes/Carrito/Carrito';
import { Inicio } from './componentes/Inicio/inicio';
import styles from './App.module.css';
import { DetailTeclados } from './componentes/Detail/DetailTeclados';
import { DetailMotherboard } from './componentes/Detail/DetailMotherboard';
import { DetailMouse } from './componentes/Detail/DetailMouse';
import CreateMotherboard from './componentes/CreateProduct/CreateMotherboard';
import CreateTeclado from './componentes/CreateProduct/CreateTeclado';
import CreateMouse from './componentes/CreateProduct/CreateMouse';
import { DetailOther } from './componentes/Detail/DetailOther';
import CreateOther from './componentes/CreateProduct/CreateOther';

function App() {
	const [menu, setMenu] = useState(false);
	const [carrito, setCarrito] = useState([]);

	const agregarAlCarrito = (producto) => {
		setCarrito([...carrito, producto]);
	};

	const functionToggle = () => {
		setMenu(!menu);
	};

	const toggleMenu = menu ? true : false;

	return (
		<div className={styles.App}>
			<Header
				functionToggle={functionToggle}
				carrito={carrito}
			/>
			<Carrito
				functionToggle={functionToggle}
				toggleMenu={toggleMenu}
				carrito={carrito}
				setCarrito={setCarrito}
			/>
			<Routes>
				<Route
					path='/'
					element={<Inicio />}
				/>
				<Route
					path='/productos'
					element={<ProductoLista agregarAlCarrito={agregarAlCarrito} />}
				/>
				<Route
					path='/createTeclado'
					element={<CreateTeclado />}
				/>
				<Route
					path='/createMouse'
					element={<CreateMouse />}
				/>
				<Route
					path='/createOther'
					element={<CreateOther />}
				/>
				<Route
					path='/createMotherboard'
					element={<CreateMotherboard />}
				/>
				<Route
					path='/teclados/:id'
					element={<DetailTeclados 
						agregarAlCarrito={agregarAlCarrito} />}
				/>
				<Route
					path='/motherboard/:id'
					element={<DetailMotherboard 
						agregarAlCarrito={agregarAlCarrito} />}
				/>
				<Route
					path='/mouse/:id'
					element={<DetailMouse 
						agregarAlCarrito={agregarAlCarrito} />}
				/>
				<Route
					path='/other/:id'
					element={<DetailOther 
						agregarAlCarrito={agregarAlCarrito}/>}
				/>
			</Routes>
		</div>
	);
}

export default App;
