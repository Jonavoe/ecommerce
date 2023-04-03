import React from 'react';
import 'boxicons';
import { DataProvider } from './context/DataProvider';
import { Route, Routes } from 'react-router-dom';
import ProductoLista from './componentes/Productos/Producto';
import Header from './componentes/Header/Header';
import { Carrito } from './componentes/Carrito/Carrito';
import { Inicio } from './componentes/Inicio/inicio';

function App() {
	return (
		<DataProvider>
			<div className='App'>
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
