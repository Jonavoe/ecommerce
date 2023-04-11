import React, { useState } from 'react';
import styles from './CreateProducto.module.css';
import { useNavigate } from 'react-router-dom';

function CreateTeclado() {
	const [formData, setFormData] = useState(getInitialFormState());

	function getInitialFormState() {
		return {
			title: '',
			price: 0,
			image: '',
			category: 'teclado',
			cantidad: 0,
			switchs: '',
			teclado: '',
			color: '',
			mecanismo: '',
			switchEspecífico: '',
			material: '',
			touchpad: '',
			padNumérico: '',
		};
	}

	const handleSubmit = async (event) => {
		event.preventDefault();

		const password = prompt('Ingrese su contraseña añadir el producto:');
		if (password !== '1234') {
			alert('Añadir producto ha sido cancelada.');
			return;
		}

		try {
			const response = await fetch(
				'https://ecommerce-production-dcb7.up.railway.app/teclados',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
				}
			);
			const data = await response.json();
			console.log(data);
			alert(`Producto ${selector} agregado correctamente`);
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const handleSelectorChange = (event) => {
		setSelector(event.target.value);

		switch (event.target.value) {
			case 'Mouse':
				navigate('/CreateMouse');
				break;
			case 'Teclado':
				navigate('/CreateTeclado');
				break;
			case 'Motherboard':
				navigate('/CreateMotherboard');
				break;
			case 'Other':
				navigate('/CreateOther');
				break;
			default:
				break;
		}
	};

	const navigate = useNavigate();

	const [selector, setSelector] = useState('Teclado');

	return (
		<div>
			<div className={styles.containerTitle}>
				<h1 className={styles.title}>
					<select
						className={styles.select}
						value={selector}
						onChange={handleSelectorChange}>
						<option
							className={styles.option}
							value='Teclado'>
							Teclado
						</option>
						<option
							className={styles.option}
							value='Motherboard'>
							Motherboard
						</option>
						<option
							className={styles.option}
							value='Mouse'>
							Mouse
						</option>
						<option
							className={styles.option}
							value='Other'>
							Other
						</option>
					</select>
				</h1>
			</div>
			<div>
				<h1>Crea un {selector}</h1>
			</div>
			<form onSubmit={handleSubmit}>
				<label>
					Title:
					<input
						type='text'
						name='title'
						value={formData.title}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Price:
					<input
						type='number'
						name='price'
						value={formData.price}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Image:
					<input
						type='text'
						name='image'
						value={formData.image}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Cantidad:
					<input
						type='number'
						name='cantidad'
						value={formData.cantidad}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Switchs:
					<input
						type='text'
						name='switchs'
						value={formData.switchs}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Teclado:
					<input
						type='text'
						name='teclado'
						value={formData.teclado}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Color:
					<input
						type='text'
						name='color'
						value={formData.color}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Mecanismo:
					<input
						type='text'
						name='mecanismo'
						value={formData.mecanismo}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Switch Específico:
					<input
						type='text'
						name='mecanismo'
						value={formData.switchEspecífico}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Material:
					<input
						type='text'
						name='material'
						value={formData.material}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Touchpad:
					<input
						type='text'
						name='touchpad'
						value={formData.touchpad}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Pad Numérico:
					<input
						type='text'
						name='padNumerico'
						value={formData.padNumerico}
						onChange={handleChange}
					/>
				</label>
				<br />
				<button type='submit'>Create Keyboard</button>
			</form>
		</div>
	);
}

export default CreateTeclado;
