import '../App.css'
//import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'react-toastify/dist/ReactToastify.css';
//import imagen from "../assets/imgProyectos/CapturaRuleta.jpg"


function ProyectoFacturaES() {
    const openOtherPage = () => {
        window.open("https://factura-react.vercel.app", '_blank');
    };
    return (
        <>
                <div className="card col-12 col-sm-12 col-md-4 col-lg-12 col-xl-8" id='cardP'>
                    <div className="card-body" style={{ color: "white" }}>
                        <h5 className="card-title">Factura</h5>
                        <p className="card-text" >Una sencilla factura creada en react</p>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFactura">
                            Ver Mas
                        </button>
                    </div>
                </div>

{/* inicio modal */}

            <div className="modal fade" id="exampleModalFactura" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Factura Dinamica</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Un ejemplo de una factura dinamica creada con React, Js y bootstrap, creada pensando en una aplicacion 
                            tipo Crud, permite crear, eliminar y mostrar diferentes campos de texto los cuales tambien tienen sus respectivas
                            validaciones incluidas. 

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
