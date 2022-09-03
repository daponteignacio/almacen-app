export function getDate() {
  const date = new Date();
  const dia = date.getDate();
  const mes = date.getMonth() + 1;
  const hora = date.getHours();
  const minutos = date.getMinutes();

  return `${dia}/${mes < 10 ? `0${mes}` : `${mes}`} - ${
    hora < 10 ? `0${hora}` : `${hora}`
  }:${minutos < 10 ? `0${minutos}` : `${minutos}`}`;
}
