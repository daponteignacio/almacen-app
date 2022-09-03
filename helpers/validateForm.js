export const validate = (values) => {
  const errors = {};

  // if (!values.barcode) {
  //   errors.barcode = "Requerido";
  // }

  if (!values.nombre) {
    errors.nombre = "Requerido";
  }

  if (!values.precio) {
    errors.precio = "Requerido";
  }

  if (!values.ganancia) {
    errors.ganancia = "Requerido";
  }

  // if (!values.categoria) {
  //   errors.categoria = "Requerido";
  // }

  return errors;
};
