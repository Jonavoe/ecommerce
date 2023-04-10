import { useEffect } from 'react';
import styles from './Carrito.module.css';

export const Carrito = ({
	carrito,
	setCarrito,
	toggleMenu,
	functionToggle,
}) => {
	const removeCarrito = (producto) => {
		const nuevoCarrito = carrito.filter((p) => p.id !== producto);
		console.log(nuevoCarrito);
		setCarrito(nuevoCarrito);
	};

	const aumentarCantidad = (producto) => {
		const nuevoCarrito = [...carrito];
		const index = nuevoCarrito.findIndex((p) => p.id === producto);
		nuevoCarrito[index].cantidad++;
		setCarrito(nuevoCarrito);
	};

	const disminuirCantidad = (producto) => {
		const nuevoCarrito = [...carrito];
		const index = nuevoCarrito.findIndex((p) => p.id === producto);
		if (nuevoCarrito[index].cantidad === 1) {
			removeCarrito(producto);
		} else {
			nuevoCarrito[index].cantidad--;
			setCarrito(nuevoCarrito);
		}
	};

	const valorTotal = () => {
		const valor = carrito.reduce((total, producto) => {
			return total + producto.price * producto.cantidad;
		}, 0);
		return parseFloat(valor.toFixed(2));
	};

	const total = parseFloat(valorTotal());

	const comprar = () => {
		alert('compra realizada con exito');
	};
	const showCarritos = toggleMenu
		? `${styles.carritos} ${styles.show}`
		: styles.carritos;

	const showCarrito = toggleMenu
		? `${styles.carrito} ${styles.show}`
		: styles.carrito;

	useEffect(() => {}, [toggleMenu]);

	return (
		<div className={showCarritos}>
			<div className={showCarrito}>
				<div
					className={styles.carrito__close}
					onClick={functionToggle}>
					<box-icon name='x'></box-icon>
				</div>
				<h2>Su Carrito</h2>
				<div className={styles.carrito__footer}>
					<h3>Valor Total: ${total}</h3>
					<button
						onClick={comprar}
						className={styles.btn}>
						Comprar
					</button>
				</div>

				<div className={styles.carrito__center}>
					{carrito.map((producto) => (
						<div
							className={styles.carrito__item}
							key={producto.id}>
							<img
								src={producto.image}
								alt={producto.title}
							/>
							<div>
								<h3>{producto.title}</h3>
								<p className={styles.price}>${producto.price}</p>
							</div>
							<div>
								<box-icon
									name='up-arrow'
									type='solid'
									onClick={() => aumentarCantidad(producto.id)}></box-icon>
								<p className={styles.cantidad}>{producto.cantidad}</p>
								<box-icon
									name='down-arrow'
									type='solid'
									onClick={() => disminuirCantidad(producto.id)}></box-icon>
							</div>
							<div className={styles.remove__item}>
								<box-icon
									onClick={() => removeCarrito(producto.id)}
									name='trash'
									type='solid'></box-icon>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
