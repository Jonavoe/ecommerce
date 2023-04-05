import { useParams } from 'react-router-dom';
import motherboard from '../../Data/Motherboard';
import styles from './Detail.module.css';

export const DetailMotherboard = () => {
	const { id } = useParams();
	const product = motherboard.items.find((item) => item.id === parseInt(id));

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
					<p>Cantidad: {product.cantidad}</p>
					<p>Cantidad Slot PCIE16x: {product.cantidadSlotPCIE16x}</p>
					<p>Salidas HDMI: {product.salidasHDMI}</p>
					<p>Cantidad Slot M2 Totales: {product.cantidadSlotM2Totales}</p>
					<p>Sistema Conexion RGB: {product.sistemaConexionRGB}</p>
					<p>placa De Red:{product.placaDeRed}</p>
					<p>Puertos USB32 Traseros: {product.puertosUSB32Traseros}</p>
					<p>Puertos USB Type C: {product.puertosUSBTypeC}</p>
					<p>Cantidad Slot M2 NVMe: {product.cantidadSlotM2NVMe}</p>
				</div>
			</div>
		</div>
	);
};
