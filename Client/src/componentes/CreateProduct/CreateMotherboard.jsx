import React, { useState } from 'react';
import styles from './CreateProducto.module.css';
import { useNavigate } from 'react-router-dom';

function CreateMotherboard() {
	const [formData, setFormData] = useState(getInitialFormState());

	function getInitialFormState() {
		return {
			title: '',
			price: 0,
			image: '',
			category: 'motherboard',
			cantidad: 0,
			cantidadSlotPCIE16x: 0,
			puertosSATA: 0,
			salidasHDMI: 0,
			cantidadSlotM2Totales: 0,
			placaWifiIntegrada: '',
			sistemaConexionRGB: '',
			placaDeRed: '',
			puertosUSB32Traseros: 0,
			puertosUSBTypeC: 0,
			cantidadSlotM2NVMe: 0,
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
				'https://ecommerce-production-dcb7.up.railway.app/motherboards',
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

	const [selector, setSelector] = useState('Motherboard');

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
			<div className={styles.containerForm}>
				<div className={styles.titleForm}>
					<h1>Crea un {selector}</h1>
				</div>
				<form
					className={styles.form}
					onSubmit={handleSubmit}>
					<label>
						Title:
						<input
							type='text'
							name='title'
							value={formData.title}
							onChange={handleChange}
						/>
					</label>
					<label>
						Price:
						<input
							type='text'
							name='price'
							value={formData.price}
							onChange={handleChange}
						/>
					</label>
					<label>
						Image:
						<input
							type='text'
							name='image'
							value={formData.image}
							onChange={handleChange}
						/>
					</label>
					<label>
						Cantidad:
						<input
							type='text'
							name='cantidad'
							value={formData.cantidad}
							onChange={handleChange}
						/>
					</label>
					<label>
						Cantidad Slot PCI-E 16x:
						<input
							type='text'
							name='cantidadSlotPCIE16x'
							value={formData.cantidadSlotPCIE16x}
							onChange={handleChange}
						/>
					</label>
					<label>
						Puertos SATA:
						<input
							type='text'
							name='puertosSATA'
							value={formData.puertosSATA}
							onChange={handleChange}
						/>
					</label>
					<label>
						Salidas HDMI:
						<input
							type='text'
							name='salidasHDMI'
							value={formData.salidasHDMI}
							onChange={handleChange}
						/>
					</label>
					<label>
						Cantidad Slot M.2 Totales:
						<input
							type='text'
							name='cantidadSlotM2Totales'
							value={formData.cantidadSlotM2Totales}
							onChange={handleChange}
						/>
					</label>
					<label>
						Placa Wi-Fi Integrada:
						<input
							type='text'
							name='placaWifiIntegrada'
							value={formData.placaWifiIntegrada}
							onChange={handleChange}
						/>
					</label>
					<label>
						Sistema de Conexión RGB:
						<input
							type='text'
							name='sistemaConexionRGB'
							value={formData.sistemaConexionRGB}
							onChange={handleChange}
						/>
					</label>
					<label>
						Placa de Red:
						<input
							type='text'
							name='placaDeRed'
							value={formData.placaDeRed}
							onChange={handleChange}
						/>
					</label>
					<label>
						Puertos USB 3.2 Traseros:
						<input
							type='text'
							name='puertosUSB32Traseros'
							value={formData.puertosUSB32Traseros}
							onChange={handleChange}
						/>
					</label>
					<label>
						Puertos USB Type-C:
						<input
							type='text'
							name='puertosUSBTypeC'
							value={formData.puertosUSBTypeC}
							onChange={handleChange}
						/>
					</label>
					<label>
						Cantidad Slot M.2 NVMe:
						<input
							type='text'
							name='cantidadSlotM2NVMe'
							value={formData.cantidadSlotM2NVMe}
							onChange={handleChange}
						/>
					</label>
					<button
						className={styles.btn}
						type='submit'>
						Create Motherboard
					</button>
				</form>
			</div>
		</div>
	);
}

export default CreateMotherboard;
