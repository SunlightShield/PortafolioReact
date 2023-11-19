import '../App.css'
//import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'react-toastify/dist/ReactToastify.css';
import imagen from "../assets/imgProyectos/CapturaRuleta.jpg"


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
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Ver Mas
                        </button>
                    </div>
                </div>
            </div>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel" style={{ color: "black" }}>Zufallsroulette</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" style={{ color: "black" }}>
                        Ein in React erstelltes Roulette ermöglicht es Ihnen, die Datenbank in Excel zu laden und einen potenziellen Gewinner auszuwählen
                            zufällig in einer lustigen Roulette-Animation. <br />

                            In diesem Projekt war ich für die Back-End-Prozedur verantwortlich und erstellte eine Datenladefunktion.
                            Zeigen Sie es auf dem Bildschirm und wählen Sie den Gewinner nach dem Zufallsprinzip aus

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Zurückkehren</button>
                            <button type="button" class="btn btn-primary" onClick={openOtherPage}>Gehen Sie zur Seite</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProyectoRuletaDE
