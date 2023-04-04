import React, { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import { ProductoItem } from './ProductoItem';
import styles from './Producto.module.css';

export const ProductoLista = () => {
	const value = useContext(DataContext);
	const [productos] = value.productos;

	return (
		<div >
			<div className={styles.containerTitle}>
				<h1 className={styles.title}>PRODUCTOS</h1>
			</div>
			<div className={styles.productos}>
				{productos.map((producto) => (
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
