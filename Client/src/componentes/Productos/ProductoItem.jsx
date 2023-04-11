import styles from './ProductoItem.module.css';
import { Link } from 'react-router-dom';

export const ProductoItem = ({
	agregarAlCarrito,
	eliminarProducto,
	id,
	title,
	price,
	image,
	category,
	cantidad,
}) => {
	const addCarrito = () => {
		agregarAlCarrito({ id, title, price, image, category, cantidad });
	};

	const eliminar = (tipoProducto) => {
		const password = prompt(
			'Ingrese su contraseña para confirmar la eliminación:'
		);
		if (password !== '1234') {
			alert(
				'Contraseña incorrecta. La eliminación del producto ha sido cancelada.'
			);
			return;
		}
		eliminarProducto(id, tipoProducto);
	};

	return (
		<div className={styles.producto}>
			<div className={styles.button}>
				<button
					className={styles.btn}
					onClick={() => addCarrito()}>
					<img
						src='https://i.postimg.cc/kgrzh5GY/agrega-removebg-preview.png'
						alt='agregar'
					/>
				</button>
				<button
					className={styles.btn}
					onClick={() => eliminar(category)}>
					<img
						src='https://i.postimg.cc/3J0zBG8D/elimina-removebg-preview.png'
						alt='Eliminar'
					/>
				</button>
			</div>
			<div className={styles.producto__img}>
				<Link to={`/${category}/${id}`}>
					<img
						src={image}
						alt={title}
					/>
				</Link>
			</div>
			<div className={styles.producto__footer}>
				<h1> {title}</h1>
				<p> {category} </p>
				<p className={styles.price}> ${price} </p>
			</div>
		</div>
	);
};
