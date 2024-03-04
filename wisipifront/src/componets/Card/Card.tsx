import React from 'react'
import { Card as BootstrapCard, Button, Container, Row, Col} from 'react-bootstrap'

import './Card.css'
import image_card from '../../assets/auto1.png'
import image2_card from '../../assets/auto2.png'
import image3_card from '../../assets/auto3.png'

const cardData = [
  {
    id: 1,
    title: "Van",
    description: "Capacidad: de 10 a 17 metros cúbicos",
    img: image_card
  },
  {
    id: 2,
    title: "Camioneta",
    description: "Capacidad: de 25 a 30 metros cúbicos",
    img: image2_card
  },
  {
    id: 3,
    title: "Sedán",
    description: "Capacidad: de 8 a 10 metros cúbicos",
    img: image3_card
  }
]
const Card = () => {
  return (
    <section className="card-section block">
      <Container fluid className='container'>
        <div className="title-cards-container">
          <h1 style={{fontSize: "90px"}}>Tipo de transportes</h1>
        </div>
        <Row>
          {
            cardData.map(card => (
              <Col md={4} key={card.id}>
                <div className="holder">
                  <BootstrapCard className="card p-3" style={{ width: "20rem", height: "25rem", backgroundColor: "#F9C96A"}}>
                    <BootstrapCard.Img variant="top" src={card.img} className='card-img' />
                    <BootstrapCard.Body>
                      <BootstrapCard.Title>{card.title}</BootstrapCard.Title>
                      <BootstrapCard.Text>
                        {card.description}
                      </BootstrapCard.Text>
                      <a href="#" className="btn btn-primary" style={{backgroundColor: "#0D6E6E", border: "none"}}>Ver más</a>
                      <a href="#" className="btn btn-primary" style={{backgroundColor: "#0D6E6E", border: "none"}}>Contratar</a>
                    </BootstrapCard.Body>
                  </BootstrapCard>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  );
}

export default Card;