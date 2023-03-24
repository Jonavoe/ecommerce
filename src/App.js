import React from 'react';
import { Header } from './componentes/Header';
import 'boxicons';
import { DataProvider } from './context/DataProvider';
import { Route, Routes } from 'react-router-dom';
import { Inicio } from './componentes/Inicio';
import { Carrito } from './componentes/Carrito';
import ProductoLista from './componentes/Productos';

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
