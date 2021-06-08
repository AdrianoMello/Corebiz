import React from 'react'
import line from '../../images/products/line.svg'
import email from '../../images/email.svg'
import phone from '../../images/phone.svg'
import LogosFooter from '../../images/LogosFooter.svg'

const Footer = () => {
    return (
        <div style={{backgroundColor: 'black'}} className="row">
            
                <div className="col-10 offset-1 offset-md-0 col-md-4">
                    <div style={{color: 'white'}} className="p-5">
                        <h3 style={{fontWeight: 'bold'}}>Localização</h3>
                        <img style={{width: '75px'}} src={line} />
                        <p>Avenida Andrômeda, 2000. Bloco 6 e 8 </p>
                        <p>Alphavile SP</p>
                        <p>brasil@corebiz.ag</p>
                        <p>+55 11 3090 1039</p>
                    </div>
                </div>
                <div style={{alignSelf: 'center'}} className="col-10 offset-1 offset-md-0 col-md-4">
                    <div style={{placeItems: 'center'}} className="d-grid">
                        <button style={{marginBottom: '1rem', marginTop: '1rem', backgroundColor: 'white', border: 'none', color: 'black'}} className="col-6 btn btn-primary"><img src={email} /> ENTRE EM CONTATO</button>
                        <button style={{backgroundColor: 'white', border: 'none', color: 'black'}} className="col-6 btn btn-primary"><img src={phone} /> FALE COM NOSSO CONSULTOR ONLINE</button>
                    </div>
                    
                </div>
                <div style={{alignSelf: 'center', textAlign: 'center', marginTop: '3rem'}} className="col-10 offset-1 offset-md-0 col-md-4">
                    <img src={LogosFooter} />
                </div>
            
        </div>
    )
}

export default Footer