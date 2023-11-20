import '../App.css'
//import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'react-toastify/dist/ReactToastify.css';
//import imagen from "../assets/imgProyectos/CapturaRuleta.jpg"


function ProyectoRuletaPL() {
    const openOtherPage = () => {
        window.open("https://ruleta-al-azar.vercel.app", '_blank');
    };
    return (
        <>
            <div className='d-flex justify-item-between'>
                <div className="card col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" id='cardP'>
                    <div className="card-body" style={{ color: "white" }}>
                        <h5 className="card-title">Ruletka</h5>
                        <p className="card-text" >Prosta ruletka stworzona przy użyciu React</p>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Zobacz więcej
                        </button>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel" style={{ color: "black" }}>Losowa ruletka</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{ color: "black" }}>
                            Ruleta stworzona w React pozwala na załadowanie bazy danyc do Excela i wybranie potencjalnego zwyciezcy
                            loswo w zabawną animacją ruletki. <br />

                            W tym projecie odpowiadałem za procedurę Back End, tworząc funkcję ładującą dane,
                            Pokaż to na ekranie i losowo wybierz zwyciezce

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

export default ProyectoRuletaPL
