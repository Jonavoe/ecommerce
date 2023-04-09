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
			category: '',
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
		try {
			const response = await fetch('http://localhost:3001/motherboards', {
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
			<div>
				<h1>Crea un {selector}</h1>
			</div>
			<form onSubmit={handleSubmit}>
				<br />
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
						type='text'
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
					Category:
					<input
						type='text'
						name='category'
						value={formData.category}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Cantidad:
					<input
						type='text'
						name='cantidad'
						value={formData.cantidad}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Cantidad Slot PCI-E 16x:
					<input
						type='text'
						name='cantidadSlotPCIE16x'
						value={formData.cantidadSlotPCIE16x}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Puertos SATA:
					<input
						type='text'
						name='puertosSATA'
						value={formData.puertosSATA}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Salidas HDMI:
					<input
						type='text'
						name='salidasHDMI'
						value={formData.salidasHDMI}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Cantidad Slot M.2 Totales:
					<input
						type='text'
						name='cantidadSlotM2Totales'
						value={formData.cantidadSlotM2Totales}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Placa Wi-Fi Integrada:
					<input
						type='text'
						name='placaWifiIntegrada'
						value={formData.placaWifiIntegrada}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Sistema de Conexión RGB:
					<input
						type='text'
						name='sistemaConexionRGB'
						value={formData.sistemaConexionRGB}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Placa de Red:
					<input
						type='text'
						name='placaDeRed'
						value={formData.placaDeRed}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Puertos USB 3.2 Traseros:
					<input
						type='text'
						name='puertosUSB32Traseros'
						value={formData.puertosUSB32Traseros}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Puertos USB Type-C:
					<input
						type='text'
						name='puertosUSBTypeC'
						value={formData.puertosUSBTypeC}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Cantidad Slot M.2 NVMe:
					<input
						type='text'
						name='cantidadSlotM2NVMe'
						value={formData.cantidadSlotM2NVMe}
						onChange={handleChange}
					/>
				</label>
				<br />
				<button type='submit'>Create Motherboard</button>
			</form>
		</div>
	);
}

export default CreateMotherboard;
