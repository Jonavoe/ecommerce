import { useParams } from 'react-router-dom';
import mouse from '../../Data/Mouse';
import styles from './Detail.module.css';
import { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';

export const DetailMouse = () => {
	const { id } = useParams();
	const product = mouse.items.find((item) => item.id === parseInt(id));
	const value = useContext(DataContext);
	const addCarrito = value.addCarrito;

	return (
		<div className={styles.containerDetail}>
			<div className={styles.detail}>
				<div className={styles.detailPrincipal}>
					<div className={styles.detailImg}>
						<img
							src={product.image}
							alt={product.title}
						/>
					</div>
					<div className={styles.detailText}>
						<div className={styles.title}>
							<h1>{product.title}</h1>
						</div>
						<div className={styles.price}>
							<p>Precio: ${product.price}</p>
						</div>
						<button
							className={styles.btn}
							onClick={() => addCarrito(product.id)}>
							AÑADIR AL CARRITO
						</button>
					</div>
				</div>
			</div>
			<div className={styles.detailFeatures}>
				<div className={styles.features}>
					<p>Cnatidad: {product.cantidad}</p>
					<p>Color: {product.color}</p>
					<p>Cantidad de botones: {product.cantidadDeBotones}</p>
					<p>Tipo de Switch: {product.tipDeSwitch}</p>
				</div>
				<div className={styles.features}>
					<p>Tipo de sensor: {product.tipoDeSensor}</p>
					<p>Tipo de Switch especifico:{product.tipoInalámbrico}</p>
					<p>Orientacion: {product.orientacion}</p>
				</div>
			</div>
		</div>
	);
};
