import { types } from "../types/types";
import { productos } from "../data/data";

export const getProductos = (nuevoProducto) => {
  return async (dispatch) => {
    console.log(nuevoProducto.id);
    productos.push(nuevoProducto);

    dispatch({
      type: types.getProductos,
      payload: productos,
    });
  };
};

export const setNewProducto = (newProducto) => {
  return async (dispatch) => {
    dispatch({
      type: types.setNewProducto,
      payload: newProducto,
    });
  };
};

export const setProductoSelected = (producto = {}) => {
  return async (dispatch) => {
    dispatch({ type: types.setProductoSelected, payload: producto });
  };
};

export const setBarCode = (barcode = "") => {
  return async (dispatch) => {
    dispatch({ type: types.setScanned, payload: barcode });
  };
};
