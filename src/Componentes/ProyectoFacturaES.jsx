import '../App.css'
//import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'react-toastify/dist/ReactToastify.css';
//import imagen from "../assets/imgProyectos/CapturaRuleta.jpg"


function ProyectoFacturaES() {
    const openOtherPage = () => {
        window.open("https://ruleta-al-azar.vercel.app", '_blank');
    };
    return (
        <>
                <div className="card col-12 col-sm-12 col-md-4 col-lg-12 col-xl-8" id='cardP'>
                    <div className="card-body" style={{ color: "white" }}>
                        <h5 className="card-title">Factura</h5>
                        <p className="card-text" >En construcción</p>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled>
                            Ver Mas
                        </button>
                    </div>
                </div>

{/* inicio modal */}

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Ruleta al Azar</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Participé activamente en el desarrollo de una emocionante Ruleta de la Fortuna creada en React. 
                            Esta aplicación va más allá de la diversión, ya que permite cargar una base de datos desde un archivo Excel y elige a un 
                            afortunado ganador mediante una animación cautivadora de la ruleta.
                            <br/>
                            En este proyecto, asumí el liderazgo en el Back End, diseñando y ejecutando el procedimiento esencial. 
                            Mi contribución incluyó la creación de la función para cargar la data desde Excel, exhibirla de manera visualmente 
                            atractiva en pantalla y seleccionar al ganador de forma aleatoria, todo ello con una animación 
                            que agrega un toque de emoción a la experiencia.
                            <br/>
                            Este proyecto no solo destacó mis habilidades técnicas en React, sino también mi capacidad para aportar soluciones 
                            innovadoras y divertidas. Estoy emocionado de compartir más sobre cómo este proyecto puede agregar un elemento de sorpresa 
                            y emoción a diversas situaciones y eventos.

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

export default ProyectoFacturaES
