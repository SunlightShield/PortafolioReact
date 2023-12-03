import '../App.css'
//import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'react-toastify/dist/ReactToastify.css';


function Linkspagina() {



    return (
        <>
            <nav className="navbar navbar-custom fixed-top navbar-expand-lg navbar-dark navbar-dark-custom bg-dark-custom navbar-js">
                <div className="container">

                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            Menu
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark p-2" aria-labelledby="dropdownMenu2">
                            <li className="nav-item">
                                <a className="nav-link scroll-js" href="#about-me">Sobre mi</a>
                            </li>
                            <li><hr class="dropdown-divider"/></li>
                            <li className="nav-item">
                                <a className="nav-link scroll-js" href="#about-me-Pro">Mis Proyectos</a>
                            </li>
                            <li><hr class="dropdown-divider"/></li>
                            <li className="nav-item">
                                <a className="nav-link scroll-js" href="#about-me-Exp">Mis Experiencias</a>
                            </li>
                        </ul>
                    </div>


                    {/* <a className="navbar-brand navbar-brand-custom scroll-js" href="#masthead">Vito</a> */}
                    {/* <button className="navbar-toggler navbar-toggler-custom" data-toggle="collapse" data-target="#navbarSupportedContent" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        Menu <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link scroll-js" href="#about-me">Sobre mi</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link scroll-js" href="#about-me-Pro">Mis Proyectos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link scroll-js" href="#about-me-Exp">Mis Experiencias Laborales</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </nav>

        </>
    )
}
export default Linkspagina