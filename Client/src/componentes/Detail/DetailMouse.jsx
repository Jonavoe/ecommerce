import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { useEffect, useState } from "react";

export const DetailMouse = ({
  agregarAlCarrito,
  title,
  price,
  image,
  category,
  cantidad,
}) => {
  const { id } = useParams();

  const [mouse, setMouse] = useState([]);

  const obtenerProductos = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchProductos = async () => {
      const productosMouse = await obtenerProductos(
        `https://ecommercews.onrender.com/mouses/${id}`
      );
      setMouse(productosMouse);
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
            <img src={mouse.image} alt={mouse.title} />
          </div>
          <div className={styles.detailText}>
            <div className={styles.title}>
              <h1>{mouse.title}</h1>
            </div>
            <div className={styles.price}>
              <p>Precio: ${mouse.price}</p>
            </div>
            <button className={styles.btn} onClick={() => addCarrito()}>
              AÑADIR AL CARRITO
            </button>
          </div>
        </div>
      </div>
      <div className={styles.detailFeatures}>
        <div className={styles.features}>
          <p>Cnatidad: {mouse.cantidad}</p>
          <p>Color: {mouse.color}</p>
          <p>Cantidad de botones: {mouse.cantidadDeBotones}</p>
          <p>Tipo de Switch: {mouse.tipDeSwitch}</p>
        </div>
        <div className={styles.features}>
          <p>Tipo de sensor: {mouse.tipoDeSensor}</p>
          <p>Tipo de Switch especifico:{mouse.tipoInalámbrico}</p>
          <p>Orientacion: {mouse.orientacion}</p>
        </div>
      </div>
    </div>
  );
};
