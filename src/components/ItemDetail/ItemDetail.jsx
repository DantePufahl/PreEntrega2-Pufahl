import "./ItemDetail.css";

const YetAnotherItem = ({ id, nombre, precio, img}) => {
  return (
    <div className="contenedorItem">
     
      <div className="itemDetails">
        <h3>Nombre: {nombre} </h3>
        <p>Precio: {precio} </p>
        <p>ID: {id} </p>
        <p>
          Descripción: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptas voluptates eligendi mollitia quia explicabo voluptatibus ab
          distinctio sed beatae assumenda officia officiis aut, odio eaque
          aliquid deserunt tempora, modi iure!
        </p>
      </div>
      <img src={img} alt={nombre} />
    </div>
  );
};

export default YetAnotherItem;
