import React from 'react';
import 'boxicons';
import { DataProvider } from './context/DataProvider';
import { Route, Routes } from 'react-router-dom';
import ProductoLista from './componentes/Productos/Producto';
import Header from './componentes/Header/Header';
import { Carrito } from './componentes/Carrito/Carrito';
import { Inicio } from './componentes/Inicio/inicio';
import styles from './App.module.css'

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
				</Routes>
			</div>
		</DataProvider>
	);
}

export default App;
