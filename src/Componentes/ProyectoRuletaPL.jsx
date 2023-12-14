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
           <div className="card col-12 col-sm-12 col-md-4 col-lg-12 col-xl-8" id='cardP'>
                    <div className="card-body" style={{ color: "white" }}>
                        <h5 className="card-title">Ruletka</h5>
                        <p className="card-text" >Prosta ruletka stworzona przy użyciu React</p>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Zobacz więcej
                        </button>
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
                        Aktywnie uczestniczyłem w rozwoju ekscytującego Koła Fortuny stworzonego w React.
                            Ta aplikacja wykracza poza zabawę, ponieważ pozwala załadować bazę danych z pliku Excel i wybrać
                            szczęśliwy zwycięzca dzięki wciągającej animacji ruletki.
                            <br/>
                            W tym projekcie objąłem kierownictwo w obszarze Back Endu, projektując i wykonując niezbędną procedurę.
                            Mój wkład polegał na stworzeniu funkcji umożliwiającej załadowanie danych z Excela i ich wizualizację
                            atrakcyjne na ekranie i losowo wybierz zwycięzcę, a wszystko to z animacją
                            co dodaje odrobiny emocji do przeżycia.
                            <br/>
                            Ten projekt nie tylko uwydatnił moje umiejętności techniczne w React, ale także moją zdolność do dostarczania rozwiązań
                            innowacyjne i zabawne. Bardzo się cieszę, że mogę podzielić się więcej na temat tego, jak ten projekt może dodać element zaskoczenia
                            i emocje w różnych sytuacjach i wydarzeniach.
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
