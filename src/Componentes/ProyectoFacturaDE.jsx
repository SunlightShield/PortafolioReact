import '../App.css'
//import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'react-toastify/dist/ReactToastify.css';
//import imagen from "../assets/imgProyectos/CapturaRuleta.jpg"


function ProyectoFacturaDE() {
    const openOtherPage = () => {
        window.open("https://factura-react.vercel.app", '_blank');
    };
    return (
        <><div className="card col-12 col-sm-12 col-md-4 col-lg-12 col-xl-8" id='cardP'>
        <div className="card-body" style={{ color: "white" }}>
                        <h5 className="card-title">Rechnung</h5>
                        <p className="card-text" >Eine einfache Rechnung, die in React erstellt wurde</p>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFactura">
                          Mehr sehen
                        </button>
                    </div>
                </div>

{/* inicio modal */}

<div className="modal fade" id="exampleModalFactura" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Dynamische Rechnung</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        Ein Beispiel für eine dynamische Rechnung, die mit React, Js und Bootstrap erstellt wurde und speziell für eine Anwendung erstellt wurde
                            Mit dem Crud-Typ können Sie verschiedene Textfelder erstellen, löschen und anzeigen, die auch jeweils ihre eigenen haben
                            Validierungen inklusive.

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Zurückkehren</button>
                            <button type="button" className="btn btn-primary" onClick={openOtherPage}>Gehe zur Seite</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProyectoFacturaDE
