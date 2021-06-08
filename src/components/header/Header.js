import logo from '../../images/logo.svg'
import lupa from '../../images/lupa.svg'
import cart from '../../images/cart.svg'
import user from '../../images/user.svg'
import './Header.css'

const Header = () => {
    return (
        <nav style={{backgroundColor: '#FFFFFF !important'}} className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                
                <button className="navbar-toggler toggler-nav" type="button" data-bs-toggle="collapse" data-bs-target="#navToggle" aria-controls="navToggle" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-brand text-center col col-xl-2 col-lg-3">
                    <img style={{width: '170px', height: '41px'}} src={logo} />
                </div>

                <form className="hidden-xs hidden-sm hidden-md col-6 offset-xl-1 offset-lg-0 col-lg-5">
                    <div className="d-flex">
                        <input className="form-control searchInput" type="pesquisar" placeholder="O que está procurando?" aria-label="pesquiasar" />
                        <button className="btn searchButton" type="submit"><img src={lupa} /></button>
                    </div>
                </form>

                <ul className="navbar-nav itensStyle itensStyleMobile col-2 offset-lg-1 col-lg-3 offset-xl-1 mb-2 mb-lg-0">
                    <li className="nav-item col-8 hidden-xs hidden-sm hidden-md">
                        <a className="nav-link d-flex" aria-current="page" href="#">
                            <img src={user} /> 
                            <p style={{marginLeft: '0.5rem'}} className="small mb-0">Minha conta</p>
                        </a>
                    </li>
                    <li className="nav-item col-4">
                        <a className="nav-link" aria-current="page" href="#"><img src={cart} /></a>
                    </li>
                </ul>

                <form className="hidden-lg hidden-xl hidden-xxl col-12 mt-2">
                    <div className="d-flex">
                        <input className="form-control searchInput" type="pesquisar" placeholder="O que está procurando?" aria-label="pesquiasar" />
                        <button className="btn searchButton" type="submit"><img src={lupa} /></button>
                    </div>
                </form>
                
                <div className="collapse navbar-collapse mt-3" id="navToggle">
                    <ul className="navbar-nav mb-2 mb-lg-0 hidden-lg hidden-xl hidden-xxl">
                        <li className="nav-item ">
                            <a className="nav-link d-flex" aria-current="page" href="#">
                                <img src={user} /> 
                                <p style={{marginLeft: '0.5rem'}} className="small mb-0">Minha conta</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
  
export default Header