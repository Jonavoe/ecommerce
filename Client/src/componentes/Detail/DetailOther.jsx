import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';
import { useEffect, useState } from 'react';

export const DetailOther = () => {
	const { id } = useParams();

	const [other, setOther] = useState([]);

	const obtenerProductos = async (url) => {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	};

	useEffect(() => {
		const fetchProductos = async () => {
			const productosOther = await obtenerProductos(
				`http://localhost:3001/other/${id}`
			);
			setOther(productosOther);
		};
		fetchProductos();
	}, [id]);

	const addCarrito = () => {
		console.log('agregar carrito');
	}

	return (
		<div className={styles.containerDetail}>
			<div className={styles.detail}>
				<div className={styles.detailPrincipal}>
					<div className={styles.detailImg}>
						<img
							src={other.image}
							alt={other.title}
						/>
					</div>
					<div className={styles.detailText}>
						<div className={styles.title}>
							<h1>{other.title}</h1>
						</div>
						<div className={styles.price}>
							<p>Precio: ${other.price}</p>
							<p>Cnatidad: {other.cantidad}</p>
						</div>
						<button
							className={styles.btn}
							onClick={() => addCarrito()}>
							AÑADIR AL CARRITO
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
