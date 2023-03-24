import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Inicio } from "./Inicio"
import { ProductoLista } from "./Productos"

export const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<ProductoLista />} />
      </Routes>
    </section>
  )
}

export default Paginas
