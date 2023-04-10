/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { motion } from 'framer-motion';

export const Header = ({functionToggle, carrito}) => {
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
					<li>
						<Link
							className={styles.link}
							to='/CreateMotherboard'>
							AÑADIR
						</Link>
					</li>
				</ul>
			</div>
			<div
				className={styles.cart}
				onClick={functionToggle}>
				<box-icon name='cart'></box-icon>
				<span className={styles.item__total}>{carrito.length}</span>
			</div>
		</motion.header>
	);
};

export default Header;
