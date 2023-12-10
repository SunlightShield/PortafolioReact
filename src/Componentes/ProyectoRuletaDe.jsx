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
                        Ich war aktiv an der Entwicklung eines spannenden Glücksrads beteiligt, das in React erstellt wurde.
                            Diese Anwendung macht mehr als nur Spaß, denn sie ermöglicht es Ihnen, eine Datenbank aus einer Excel-Datei zu laden und eine auszuwählen
                            glücklicher Gewinner durch fesselnde Roulette-Animation.
                            <br/>
                            In diesem Projekt übernahm ich die Führung im Backend und konzipierte und führte die wesentlichen Prozesse aus.
                            Mein Beitrag umfasste die Erstellung der Funktion zum Laden der Daten aus Excel und zur visuellen Anzeige
                            attraktiv auf dem Bildschirm und wählen Sie den Gewinner nach dem Zufallsprinzip aus, alles mit einer Animation
                            was dem Erlebnis einen Hauch von Spannung verleiht.
                            <br/>
                            Dieses Projekt hat nicht nur meine technischen Fähigkeiten in React hervorgehoben, sondern auch meine Fähigkeit, Lösungen bereitzustellen
                            innovativ und unterhaltsam. Ich freue mich, mehr darüber zu erzählen, wie dieses Projekt für ein Überraschungselement sorgen kann
                            und Emotionen auf verschiedene Situationen und Ereignisse.
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
