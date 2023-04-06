import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Inicio } from './Inicio/inicio';
import { ProductoLista } from './Productos/Producto';
import { motion } from 'framer-motion';

export const Paginas = () => {
	return (
		<section 
    >
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
		</section>
	);
};

export default Paginas;
