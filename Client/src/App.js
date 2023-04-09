import React from 'react';
import 'boxicons';
import { DataProvider } from './context/DataProvider';
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
	return (
		<DataProvider>
			<div className={styles.App}>
				<Header />
				<Carrito />
				<Routes>
					<Route
						path='/'
						element={<Inicio />}
					/>
					<Route
						path='/productos'
						element={<ProductoLista />}
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
						element={<DetailTeclados />}
					/>
					<Route
						path='/motherboard/:id'
						element={<DetailMotherboard />}
					/>
					<Route
						path='/mouse/:id'
						element={<DetailMouse />}
					/>
					<Route
						path='/other/:id'
						element={<DetailOther />}
					/>
				</Routes>
			</div>
		</DataProvider>
	);
}

export default App;
