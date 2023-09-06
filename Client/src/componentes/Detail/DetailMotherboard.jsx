import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { useEffect, useState } from "react";

export const DetailMotherboard = ({
  agregarAlCarrito,
  title,
  price,
  image,
  category,
  cantidad,
}) => {
  const { id } = useParams();

  const [motherboard, setMotherboard] = useState([]);

  const obtenerProductos = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchProductos = async () => {
      const productosMotherboard = await obtenerProductos(
        `https://ecommercews.onrender.com/motherboards/${id}`
      );
      setMotherboard(productosMotherboard);
    };
    fetchProductos();
  }, [id]);
  const addCarrito = () => {
    agregarAlCarrito({ id, title, price, image, category, cantidad });
  };

  return (
    <div className={styles.containerDetail}>
      <div className={styles.detail}>
        <div className={styles.detailPrincipal}>
          <div className={styles.detailImg}>
            <img src={motherboard.image} alt={motherboard.title} />
          </div>
          <div className={styles.detailText}>
            <div className={styles.title}>
              <h1>{motherboard.title}</h1>
            </div>
            <div className={styles.price}>
              <p>Precio: ${motherboard.price}</p>
            </div>
            <button className={styles.btn} onClick={() => addCarrito()}>
              AÑADIR AL CARRITO
            </button>
          </div>
        </div>
      </div>
      <div className={styles.detailFeatures}>
        <div className={styles.features}>
          <p>Cantidad: {motherboard.cantidad}</p>
          <p>Cantidad Slot PCIE16x: {motherboard.cantidadSlotPCIE16x}</p>
          <p>Salidas HDMI: {motherboard.salidasHDMI}</p>
          <p>Cantidad Slot M2 Totales: {motherboard.cantidadSlotM2Totales}</p>
          <p>Sistema Conexion RGB: {motherboard.sistemaConexionRGB}</p>
        </div>
        <div className={styles.features}>
          <p>placa De Red:{motherboard.placaDeRed}</p>
          <p>Puertos USB32 Traseros: {motherboard.puertosUSB32Traseros}</p>
          <p>Puertos USB Type C: {motherboard.puertosUSBTypeC}</p>
          <p>Cantidad Slot M2 NVMe: {motherboard.cantidadSlotM2NVMe}</p>
        </div>
      </div>
    </div>
  );
};
