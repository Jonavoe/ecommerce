import { useParams } from 'react-router-dom';
import mouse from '../../Data/Mouse';
import styles from './Detail.module.css';

export const DetailMouse = () => {
	const { id } = useParams();
	const product = mouse.items.find((item) => item.id === parseInt(id));

	return (
		<div className={styles.detail}>
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
				<div className={styles.features}>
					<p>Cnatidad: {product.cantidad}</p>
					<p>Color: {product.color}</p>
					<p>Cantidad de botones: {product.cantidadDeBotones}</p>
					<p>Tipo de Switch: {product.tipDeSwitch}</p>
					<p>Tipo de sensor: {product.tipoDeSensor}</p>
					<p>Tipo de Switch especifico:{product.tipoInalámbrico}</p>
					<p>Orientacion: {product.orientacion}</p>
				</div>
			</div>
		</div>
	);
};
