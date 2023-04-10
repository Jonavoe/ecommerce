import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';
import { useEffect, useState } from 'react';

export const DetailTeclados = () => {
	const { id } = useParams();
	const [teclados, setTeclados] = useState([]);

	const obtenerProductos = async (url) => {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	};

	useEffect(() => {
		const fetchProductos = async () => {
			const productosTeclados = await obtenerProductos(
				`http://localhost:3001/teclados/${id}`
			);
			setTeclados(productosTeclados);
		};
		fetchProductos();
	}, [id]);

	const addCarrito = () => {
		console.log('agregar carrito');
	};
	return (
		<div className={styles.containerDetail}>
			<div className={styles.detail}>
				<div className={styles.detailPrincipal}>
					<div className={styles.detailImg}>
						<img
							src={teclados.image}
							alt={teclados.title}
						/>
					</div>
					<div className={styles.detailText}>
						<div className={styles.title}>
							<h1>{teclados.title}</h1>
						</div>
						<div className={styles.price}>
							<p>Precio: ${teclados.price}</p>
						</div>
						{teclados && (
							<button
								className={styles.btn}
								onClick={() => addCarrito()}>
								AÑADIR AL CARRITO
							</button>
						)}
					</div>
				</div>
			</div>
			<div className={styles.detailFeatures}>
				<div className={styles.features}>
					<p>Cantidad: {teclados.cantidad}</p>
					<p>Switch: {teclados.switch}</p>
					<p>Teclado: {teclados.teclado}</p>
					<p>Color: {teclados.color}</p>
					<p>Tipo de mecanismo: {teclados.mecanismo}</p>
				</div>
				<div className={styles.features}>
					<p>Tipo de Switch especifico: {teclados.switchEspecífico}</p>
					<p>Material: {teclados.material}</p>
					<p>Touchpad: {teclados.touchpad}</p>
					<p>Pad numérico: {teclados.padNumérico}</p>
				</div>
			</div>
		</div>
	);
};
