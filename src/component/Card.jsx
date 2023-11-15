const Card = () => {
  return (
    <>
      <div>
        <h1 className="tituloCard">Detalle de un producto</h1>
      </div>
      <div className="card">
        <div className="imgCard">
          <img src="../public/fotoCardProducto.png" className="img"></img>
        </div>
        <h3>
          <span>Nombre:</span> Celular Motorola Moto E13 64gb 2gb Ram Color Blanco
        </h3>
        <h4 className="descripcion">
          <span>Descripción:</span>
          <br />
          <p className="descripcion">
            El celular Motorola Moto E13 cuenta con un diseño sofisticado y espectacular. Obtén el estilo que estabas
            esperando con el moto e13. Su diseño delgado te proporciona una experiencia audiovisual multidimensional con
            audio Dolby Atmos y una pantalla ultraamplia HD+ de 6.5
          </p>
        </h4>
        <h4>Precio: $ 61.599</h4>
        <h4>SKU:</h4>
        <h4>Cantidad disponible: 10</h4>
      </div>
    </>
  );
};
export default Card;
