import '../App.css'
//import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'react-toastify/dist/ReactToastify.css';
//import imagen from "../assets/imgProyectos/CapturaRuleta.jpg"


function ProyectoFacturaPL() {
    const openOtherPage = () => {
        window.open("https://factura-react.vercel.app", '_blank');
    };
    return (
        <>
                <div className="card col-12 col-sm-12 col-md-4 col-lg-12 col-xl-8" id='cardP'>
                    <div className="card-body" style={{ color: "white" }}>
                        <h5 className="card-title">Faktura</h5>
                        <p className="card-text" >Prosta faktura utworzona w React</p>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Ver Mas
                        </button>
                    </div>
                </div>

{/* inicio modal */}

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Faktura dynamiczna</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        Przykład faktury dynamicznej utworzonej w React, Js i bootstrap, stworzonej z myślą o aplikacji
                            Typ Crud, umożliwia tworzenie, usuwanie i wyświetlanie różnych pól tekstowych, które również mają swoje odpowiednie
                            w tym walidacje.

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Powrót</button>
                            <button type="button" className="btn btn-primary" onClick={openOtherPage}>Idź do strony</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProyectoFacturaPL
