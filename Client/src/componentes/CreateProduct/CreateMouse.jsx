import React, { useState } from 'react';
import styles from './CreateProducto.module.css';
import { useNavigate } from 'react-router-dom';

function CreateMouse() {
	const [formData, setFormData] = useState(getInitialFormState());

	function getInitialFormState() {
		return {
			title: '',
			price: 0,
			image: '',
			category: 'mouse',
			cantidad: 0,
			color: '',
			cantidadDeBotones: 0,
			tipDeSwitch: '',
			tipoDeSensor: '',
			tipoInalámbrico: '',
			orientacion: '',
		};
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch('https://ecommerce-production-dcb7.up.railway.app/mouses', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
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

	const [selector, setSelector] = useState('Mouse');

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
					Cantidad de botones:
					<input
						type='number'
						name='cantidadDeBotones'
						value={formData.cantidadDeBotones}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Tipo de switch:
					<input
						type='text'
						name='tipoDeSwitch'
						value={formData.tipoDeSwitch}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Tipo de sensor:
					<input
						type='text'
						name='tipoDeSensor'
						value={formData.tipoDeSensor}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Tipo inalámbrico:
					<input
						type='text'
						name='tipoInalámbrico'
						value={formData.tipoInalámbrico}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Orientación:
					<input
						type='text'
						name='orientacion'
						value={formData.orientacion}
						onChange={handleChange}
					/>
				</label>
				<br />
				<button type='submit'>Create Item</button>
			</form>
		</div>
	);
}

export default CreateMouse;
