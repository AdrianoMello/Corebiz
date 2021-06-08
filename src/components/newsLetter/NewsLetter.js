import React from 'react'

const news = (e) => {
    e.preventDefault()
    var raw = "{\n    \"email\": \"heroku@test.co\",\n    \"name\": \"test\"\n}";

    var requestOptions = {
        method: 'POST',
        body: raw,
        redirect: 'follow'
    }
    
    console.log(requestOptions)
    fetch("https://corebiz-test.herokuapp.com/api/v1/newsletter", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

const NewsLetter = () => {


    return (
        <div style={{backgroundColor: '#F2F2F2', height: '25vh', marginTop: '4rem'}}>
            <div className="container">
                <h3 className="text-center p-5">Participe de nossas news com promoções e novidades!</h3>
                <form>
                    <div className="d-flex">
                        <input style={{height: '3.2rem', border: 'none'}} className="col-4 p-3" type="text" placeholder="Digite seu nome" />
                        <input style={{height: '3.2rem', border: 'none', marginLeft: '1rem'}} className="col-4 p-3" type="text" placeholder="Digite seu email" />
                        <button style={{height: '3.2rem', backgroundColor: 'black', border: 'none', marginLeft: '1rem'}} className="btn btn-primary col-3 p-3">Eu Quero!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewsLetter