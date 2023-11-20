import '../App.css'
//import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'react-toastify/dist/ReactToastify.css';
//import imagen from "../assets/imgProyectos/CapturaRuleta.jpg"


function ProyectoRuletaDE() {
    const openOtherPage = () => {
        window.open("https://ruleta-al-azar.vercel.app", '_blank');
    };
    return (
        <>
            <div className='d-flex justify-item-between'>
                <div className="card col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" id='cardP'>
                    <div className="card-body" style={{ color: "white" }}>
                        <h5 className="card-title">Roulette</h5>
                        <p className="card-text" >Einfaches Roulette erstellt mit React</p>
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
                            <h1 className="modal-title fs-5" id="exampleModalLabel" style={{ color: "black" }}>Zufallsroulette</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{ color: "black" }}>
                        Ein in React erstelltes Roulette ermöglicht es Ihnen, die Datenbank in Excel zu laden und einen potenziellen Gewinner auszuwählen
                            zufällig in einer lustigen Roulette-Animation. <br />

                            In diesem Projekt war ich für die Back-End-Prozedur verantwortlich und erstellte eine Datenladefunktion.
                            Zeigen Sie es auf dem Bildschirm und wählen Sie den Gewinner nach dem Zufallsprinzip aus

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Zurückkehren</button>
                            <button type="button" className="btn btn-primary" onClick={openOtherPage}>Gehen Sie zur Seite</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProyectoRuletaDE
