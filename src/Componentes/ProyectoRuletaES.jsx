import '../App.css'
//import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'react-toastify/dist/ReactToastify.css';
//import imagen from "../assets/imgProyectos/CapturaRuleta.jpg"


function ProyectoRuletaES() {
    const openOtherPage = () => {
        window.open("https://ruleta-al-azar.vercel.app", '_blank');
    };
    return (
        <>
            <div className='d-flex justify-item-between'>
                <div className="card col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" id='cardP'>
                    <div className="card-body" style={{ color: "white" }}>
                        <h5 className="card-title">Ruleta</h5>
                        <p className="card-text" >Una sencilla ruleta creada usando React</p>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Ver Mas
                        </button>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Ruleta al Azar</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Una ruleta creada en React, permite cargar una abse de datos en un Excel, y elije a un posible ganador
                            al azar con una entretenida animacion de ruleta. <br />

                            En este proyecto, me encargue del procedimiento del Back End, creando la funcion para cargar la data,
                            Mostrarla en pantalla y escoger al ganador al azar

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Volver</button>
                            <button type="button" className="btn btn-primary" onClick={openOtherPage}>Ir a la pagina</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProyectoRuletaES
