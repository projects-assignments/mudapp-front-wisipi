
import { Card as BootstrapCard, Container, Row, Col, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings';

import './Transportistas.css'
import image_card from '../../assets/auto1.png'
import image2_card from '../../assets/auto2.png'
import image3_card from '../../assets/auto3.png'
import image4_card from '../../assets/auto4.png'
import image5_card from '../../assets/auto5.png'
import image6_card from '../../assets/auto6.png'
import driver2_card from '../../assets/driver2.png'
import driver3_card from '../../assets/driver3.png'
import driver4_card from '../../assets/driver4.png'
import driver5_card from '../../assets/driver5.png'
import driver6_card from '../../assets/driver6.png'
import driver_card from '../../assets/driver 1.png'
import { useState } from 'react';


const generateRandomRating = () => {
    return Math.floor(Math.random() * 3) + 3
}

const cardData = [
  {
    id: 1,
    title: "Lucia",
    description: "Excelente servicio de transporte. Siempre puntual y cuidadosa con los paquetes. ¡Recomendado!",
    img: image_card,
    driver: driver2_card,
    rating: generateRandomRating()
  },
  {
    id: 2,
    title: "Elena",
    description: "Gran experiencia de transporte. Muy amable y servicial. ¡Volveré a contratar!",
    img: image2_card,
    driver: driver3_card,
    rating: generateRandomRating()
  },
  {
    id: 3,
    title: "Carlos",
    description: "Conductor muy profesional. Siempre atento a las necesidades del cliente. ¡Muy recomendable!",
    img: image3_card,
    driver: driver4_card,
    rating: generateRandomRating()
  },
  {
    id: 4,
    title: "Javier",
    description: "Excelente servicio de transporte. Conductor amable y experimentado. ¡Muy satisfecho!",
    img: image4_card,
    driver: driver5_card,
    rating: generateRandomRating()
  },
  {
    id: 5,
    title: "Teresa",
    description: "Gran experiencia de transporte. Muy amable y servicial y muy puntual. ¡Recomendado!",
    img: image5_card,
    driver: driver6_card,
    rating: generateRandomRating()
  },
  {
    id: 6,
    title: "Santiago",
    description: "Excelente servicio de transporte. Siempre puntual y cuidadoso con los paquetes. ¡Recomendado!",
    img: image6_card,
    driver: driver_card,
    rating: generateRandomRating()
  },
  {
    id: 6,
    title: "Santiago",
    description: "Excelente servicio de transporte. Siempre puntual y cuidadoso con los paquetes. ¡Recomendado!",
    img: image6_card,
    driver: driver_card,
    rating: generateRandomRating()
  },
  {
    id: 6,
    title: "Santiago",
    description: "Excelente servicio de transporte. Siempre puntual y cuidadoso con los paquetes. ¡Recomendado!",
    img: image6_card,
    driver: driver_card,
    rating: generateRandomRating()
  },
  {
    id: 6,
    title: "Santiago",
    description: "Excelente servicio de transporte. Siempre puntual y cuidadoso con los paquetes. ¡Recomendado!",
    img: image6_card,
    driver: driver_card,
    rating: generateRandomRating()
  },

]
const Card = () => {
    const [visibleCard, setVisibleCard] = useState(6)
    const showMoreCards = () => {
        setVisibleCard(cardData.length)
    }
  return (
    <section className="card-section block" >
      <Container fluid className='container'>
        <div className="title-cards-container">
          <h1 className='title' style={{ fontFamily: "Merriweather Sans"}}>Transportistas</h1>
        </div>
        <Row>
          {
            cardData.slice(0, visibleCard).map(card => (
              <Col xs={12} sm={6} md={4} key={card.id}>
                <div className="holder">
                  <BootstrapCard className="card p-1" style={{ width: "20rem", height: "25rem", backgroundColor: "#F9C96A"}}>
                    <div className='img-holder d-flex mt-4 mb-4'>
                        <BootstrapCard.Img variant="top" src={card.img} className='card-img' />
                        <BootstrapCard.Img variant="top" src={card.driver} className='driver-img'/>
                    </div>

                    <BootstrapCard.Body>
                      <BootstrapCard.Title style={{fontSize: "30px", fontFamily: "Merriweather Sans"}}>{card.title}</BootstrapCard.Title>
                      <BootstrapCard.Text style={{ fontSize: "18px", fontFamily: "Work Sans"}}>
                        {card.description}
                      </BootstrapCard.Text>
                      <div className="rating mb-3">
                        <StarRatings
                            rating={card.rating}
                            starRatedColor="#0D6E6E"
                            numberOfStars={5}
                            name='rating'
                            starDimension="20px"
                            starSpacing="2px"
                            
                      />
                      </div>

                      <Link to="/Login" className="btn btn-primary" style={{backgroundColor: "#0D6E6E", border: "none"}}>Ver más</Link>
                      <Link to="/Login" className="btn btn-primary" style={{backgroundColor: "#0D6E6E", border: "none"}}>Contratar</Link>
                    </BootstrapCard.Body>
                  </BootstrapCard>
                </div>
                
              </Col>
              
            ))
          }
        </Row>
        <Button onClick={showMoreCards} className='btn' style={{marginTop: "100px", backgroundColor: "#0D6E6E", border: "none", width: "200px", height: "50px"}} >Ver todos</Button>
      </Container>
      
    </section>
  );
}

export default Card;