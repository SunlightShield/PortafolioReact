import '../App.css'
//import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'react-toastify/dist/ReactToastify.css';
import imagen from "../assets/imgProyectos/CapturaRuleta.jpg"


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
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Zobacz więcej
                        </button>
                    </div>
                </div>
            </div>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel" style={{ color: "black" }}>Losowa ruletka</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" style={{ color: "black" }}>
                            Ruleta stworzona w React pozwala na załadowanie bazy danyc do Excela i wybranie potencjalnego zwyciezcy
                            loswo w zabawną animacją ruletki. <br />

                            W tym projecie odpowiadałem za procedurę Back End, tworząc funkcję ładującą dane,
                            Pokaż to na ekranie i losowo wybierz zwyciezce

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Powrót</button>
                            <button type="button" class="btn btn-primary" onClick={openOtherPage}>Idź do strony</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProyectoRuletaPL
