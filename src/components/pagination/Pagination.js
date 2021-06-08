import React, { useEffect, useState } from 'react'
import '../products/Products.css'
import Slider from 'react-slick'
import one from '../../images/products/one.svg'
import two from '../../images/products/two.svg'
import three from '../../images/products/three.svg'
import four from '../../images/products/four.svg'
import five from '../../images/products/five.svg'
import line from '../../images/products/line.svg'

const RenderData = () => {   
    const [data, setData] = useState([])
        
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    useEffect(() => { 
        fetch("https://corebiz-test.herokuapp.com/api/v1/products", requestOptions)
        .then(response => response.json())
        .then(result => setData(result))
        .catch(error => console.log('error', error))
    }, [])

    const settings = {
        dots: false,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                autoplay: false,
                arrows: false,
                dots: true
            }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
                autoplay: false,
                arrows: false,
                dots: true
            }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: false,
                arrows: false,
                dots: true
            }
            }
        ]
    }
    
    return (
        <>
            <div className="row p-5">
                <h3 style={{fontWeight: 'bold'}}>Mais Vendidos</h3>
                <img style={{width: '75px'}} src={line} />
            </div>
            
            <Slider style={{marginTop: '5rem'}} {...settings}>
                {
                    data.map((item) => {
                        return (  
                            <div className="col-12 productCard" key={item.productId} id={'id_'+item.productId}>
                                <div className="col-12">
                                    <img className="img-fluid" src={item.imageUrl} />
                                </div>
                                <div className="col-12 text-center">
                                    <p className="mb-1" style={{fontSize: '0.8rem', height: '37px', color: '#7A7A7A'}}>{item.productName}</p>
                                    {item.stars === 1 && <p><img style={{height: '12px', width: '70px', margin: '0 auto'}} src={one} /></p>}
                                    {item.stars === 2 && <p><img style={{height: '12px', width: '70px', margin: '0 auto'}} src={two} /></p>}
                                    {item.stars === 3 && <p><img style={{height: '12px', width: '70px', margin: '0 auto'}} src={three} /></p>}
                                    {item.stars === 4 && <p><img style={{height: '12px', width: '70px', margin: '0 auto'}} src={four} /></p>}
                                    {item.stars === 5 && <p><img style={{height: '12px', width: '70px', margin: '0 auto'}} src={five} /></p>}
                                </div>
                                <div className="col-12">
                                    <div style={{height: '40px'}} className="row text-center">
                                        {item.listPrice !== null && <p style={{color: '#7A7A7A', letterSpacing: '1px'}}><s>R$ {item.listPrice.toString().slice(0,3) + ',00'}</s></p>}
                                    </div>
                                    <div className="row text-center">
                                        <h5 style={{fontWeight: 'bold'}}>por R$ {item.price.toString().substring(item.price.toString().length - 2, -10) + ','+item.price.toString().substr(-2, 2)}</h5>
                                    </div>
                                    <div style={{height: '40px'}} className="row text-center">
                                        <p style={{color: '#7A7A7A'}} className="small">
                                            {
                                            item.installments.map((elm) => {
                                                return (
                                                    <span>ou em {elm.quantity}x de R$ {elm.value.toString().substring(elm.value.toString().length - 2, -10) + ',' + elm.value.toString().substr(-2, 2)}</span> 
                                                )
                                            })
                                            }
                                        </p>
                                    </div>
                                    <div className="row p-2">
                                        <button id={'bt-' + item.productId} style={{backgroundColor: 'black', border: 'none', opacity: '0', transition: '.5s'}} className="btn btn-primary col-8 offset-2 bt-buy">COMPRAR</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </>
    )
}

export default RenderData