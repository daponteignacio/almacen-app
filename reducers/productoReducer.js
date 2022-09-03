import { types } from "../types/types";

const initialState = {
  allProductos: [],
  productoSelected: {},
  barcodeReaded: {
    scanned: false,
    data: "",
  },
};

export const productoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getProductos:
      return {
        ...state,
        allProductos: [...action.payload],
      };

    case types.setProductoSelected:
      return {
        ...state,
        productoSelected: action.payload,
      };

    case types.setScanned:
      return {
        ...state,
        barcodeReaded: {
          scanned: true,
          data: action.payload,
        },
      };

    case types.setNewProducto:
      return {
        ...state,
        allProductos: [...allProductos, action.payload],
      };

    default:
      return state;
  }
};
