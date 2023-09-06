import React, { useState } from "react";
import styles from "./CreateProducto.module.css";
import { useNavigate } from "react-router-dom";

function CreateMouse() {
  const [formData, setFormData] = useState(getInitialFormState());

  function getInitialFormState() {
    return {
      title: "",
      price: 0,
      image: "",
      category: "mouse",
      cantidad: 0,
      color: "",
      cantidadDeBotones: 0,
      tipDeSwitch: "",
      tipoDeSensor: "",
      tipoInalámbrico: "",
      orientacion: "",
    };
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const password = prompt("Ingrese su contraseña añadir el producto:");
    if (password !== "1234") {
      alert("Añadir producto ha sido cancelada.");
      return;
    }
    try {
      const response = await fetch("https://ecommercews.onrender.com/mouses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
      case "Mouse":
        navigate("/CreateMouse");
        break;
      case "Teclado":
        navigate("/CreateTeclado");
        break;
      case "Motherboard":
        navigate("/CreateMotherboard");
        break;
      case "Other":
        navigate("/CreateOther");
        break;
      default:
        break;
    }
  };

  const navigate = useNavigate();

  const [selector, setSelector] = useState("Mouse");

  return (
    <div>
      <div className={styles.containerTitle}>
        <h1 className={styles.title}>
          <select
            className={styles.select}
            value={selector}
            onChange={handleSelectorChange}
          >
            <option className={styles.option} value="Teclado">
              Teclado
            </option>
            <option className={styles.option} value="Motherboard">
              Motherboard
            </option>
            <option className={styles.option} value="Mouse">
              Mouse
            </option>
            <option className={styles.option} value="Other">
              Other
            </option>
          </select>
        </h1>
      </div>
      <div className={styles.containerForm}>
        <div className={styles.titleForm}>
          <h1>Crea un {selector}</h1>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>

          <label>
            Price:
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </label>

          <label>
            Image:
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </label>

          <label>
            Cantidad:
            <input
              type="number"
              name="cantidad"
              value={formData.cantidad}
              onChange={handleChange}
            />
          </label>

          <label>
            Color:
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
            />
          </label>

          <label>
            Cantidad de botones:
            <input
              type="number"
              name="cantidadDeBotones"
              value={formData.cantidadDeBotones}
              onChange={handleChange}
            />
          </label>

          <label>
            Tipo de switch:
            <input
              type="text"
              name="tipoDeSwitch"
              value={formData.tipoDeSwitch}
              onChange={handleChange}
            />
          </label>

          <label>
            Tipo de sensor:
            <input
              type="text"
              name="tipoDeSensor"
              value={formData.tipoDeSensor}
              onChange={handleChange}
            />
          </label>

          <label>
            Tipo inalámbrico:
            <input
              type="text"
              name="tipoInalámbrico"
              value={formData.tipoInalámbrico}
              onChange={handleChange}
            />
          </label>

          <label>
            Orientación:
            <input
              type="text"
              name="orientacion"
              value={formData.orientacion}
              onChange={handleChange}
            />
          </label>

          <button className={styles.btn} type="submit">
            Create Item
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateMouse;
