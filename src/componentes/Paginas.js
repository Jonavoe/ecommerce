import React from 'react'
import { Route, Switch } from "react-router-dom";
import { Inicio } from "./Inicio"
import { ProductoLista } from "./Productos"

export const Paginas = () => {
  return (
    <section>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/productos" component={ProductoLista} />
      </Switch>
    </section>
  )
}

export default Paginas
