/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import styles from './Header.module.css';
import { motion } from 'framer-motion';

export const Header = () => {
	const value = useContext(DataContext);
	const [menu, setMenu] = value.menu;
	const [carrito] = value.carrito;

	const toogleTrue = () => {
		setMenu(!menu);
	};
	return (
		<motion.header
			initial={{ x: -500, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ duration: 3 }}
			viewport={{ once: true }}
			className={styles.header}>
			<div className={styles.logo}>
				<Link to='/'>
					<img
						src='https://i.postimg.cc/WzMtDh7W/byteico.png'
						alt='logo'
					/>
				</Link>
			</div>
			<div className={styles.containerList}>
				<ul>
					<li>
						<Link
							className={styles.link}
							to='/'>
							INICIO
						</Link>
					</li>
					<li>
						<Link
							className={styles.link}
							to='/productos'>
							PRODUCTOS
						</Link>
					</li>
				</ul>
			</div>
			<div
				className={styles.cart}
				onClick={toogleTrue}>
				<box-icon name='cart'></box-icon>
				<span className={styles.item__total}>{carrito.length}</span>
			</div>
		</motion.header>
	);
};

export default Header;
