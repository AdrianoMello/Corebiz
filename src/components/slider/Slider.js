import './Slider.css'
import { Carousel } from 'react-bootstrap'

const Slider = () => {
    return (
        <Carousel fade controls={false}>
            <Carousel.Item className="carousel-item-mobile">
                <Carousel.Caption className="carousel-caption-mobile">
                    <h3>Olá, o que você está buscando?</h3>
                    <p>Criar ou migrar seu e-commerce?</p>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item className="carousel-item-mobile">
                <Carousel.Caption className="carousel-caption-mobile">
                    <h3>Olá, o que você está buscando?</h3>
                    <p>Criar ou migrar seu e-commerce?</p>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item className="carousel-item-mobile">
                <Carousel.Caption className="carousel-caption-mobile">
                    <h3>Olá, o que você está buscando?</h3>
                    <p>Criar ou migrar seu e-commerce?</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="carousel-item-mobile">
                <Carousel.Caption className="carousel-caption-mobile">
                    <h3>Olá, o que você está buscando?</h3>
                    <p>Criar ou migrar seu e-commerce?</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider