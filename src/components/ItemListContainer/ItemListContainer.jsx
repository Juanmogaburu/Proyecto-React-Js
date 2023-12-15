import Card from 'react-bootstrap/Card';
import styles from "./ItemListContainer.module.scss";

const ItemListContainer = ({productsData}) => {
    const promesa = new Promise((resolve, reject) => {
        const flag = false;

    setTimeout(() => {

        if(flag) {
            resolve("es verdadero");
        } else{
            reject ("es falso");
        }
        },1000);
    });
       promesa
       .then((res) => {
            console.log(res);
       })
       .catch((err) => {
            console.log(err);
       });

       return (
        <div>
          {productsData.map((products) => (
            <Card key={products.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={products.image} />
              <Card.Body>
                <Card.Title>{products.title}</Card.Title>
                <Card.Text>{products.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      );
    };

    export default ItemListContainer;