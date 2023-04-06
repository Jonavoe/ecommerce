import React, { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import styles from './Carrito.module.css'

export const Carrito = () => {
	const value = useContext(DataContext);
	const [menu, setMenu] = value.menu;
	const [carrito, setCarrito] = value.carrito;

	const toogleFalse = () => {
		setMenu(false);
	};

	const show1 = menu ? `${styles.carritos} ${styles.show}` : styles.carritos;
	const show2 = menu ? `${styles.carrito} ${styles.show}` : styles.carrito;

	const aumentarCantidad = (id) => {
		const updatedCarrito = carrito.map((producto) => {
			if (producto.id === id) {
				return {
					...producto,
					cantidad: producto.cantidad + 1,
					precioTotal: producto.price * (producto.cantidad + 1),
				};
			}
			return producto;
		});
		setCarrito(updatedCarrito);
	};

	const disminuirCantidad = (id) => {
		const updatedCarrito = carrito.map((producto) => {
			if (producto.id === id && producto.cantidad > 1) {
				return {
					...producto,
					cantidad: producto.cantidad - 1,
					precioTotal: producto.price * (producto.cantidad - 1),
				};
			}
			return producto;
		});
		setCarrito(updatedCarrito);
	};


	const valorTotal = () => {
        let total = 0;
        carrito.forEach((producto) => {
          if (typeof producto.price === 'number' && producto.cantidad > 0) {
            total += producto.price * producto.cantidad;
          }
        });
        return total;
      };

	return (
		<div className={show1}>
			<div className={show2}>
				<div
					className={styles.carrito__close}
					onClick={toogleFalse}>
					<box-icon name='x'></box-icon>
				</div>
				<h2>Su Carrito</h2>

				<div className={styles.carrito__footer}>
					<h3>Valor Total: ${valorTotal()}</h3>
					<button className={styles.btn}>Payment</button>
				</div>

				<div className={styles.carrito__center}>
					{carrito.map((producto) => (
						<div className={styles.carrito__item}>
							<img
								src={producto.image}
								alt={producto.title}
							/>
							<div>
								<h3>Nike Air Force 1 Low CLOT Blue Sil</h3>
								<p className={styles.price}>{producto.price}</p>
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
									onClick={() => value.removeCarrito(producto.id)}
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
