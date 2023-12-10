import '../App.css'
//import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'react-toastify/dist/ReactToastify.css';
//import imagen from "../assets/imgProyectos/CapturaRuleta.jpg"


function ProyectoRuletaGB() {
    const openOtherPage = () => {
        window.open("https://ruleta-al-azar.vercel.app", '_blank');
    };
    return (
        <>
            <div className='d-flex justify-item-between'>
                <div className="card col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" id='cardP'>
                    <div className="card-body" style={{ color: "white" }}>
                        <h5 className="card-title">Roulette</h5>
                        <p className="card-text" >Simple roulette created using React</p>
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
                            <h1 className="modal-title fs-5" id="exampleModalLabel" style={{ color: "black" }}>Ruleta al azar</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{ color: "black" }}>
                        I actively participated in the development of an exciting Wheel of Fortune created in React.
                            This application goes beyond fun, as it allows you to load a database from an Excel file and choose a
                            lucky winner through captivating roulette animation.
                            <br/>
                            In this project, I assumed leadership in the Back End, designing and executing the essential procedure.
                            My contribution included creating the function to load the data from Excel, display it visually
                            attractive on the screen and select the winner at random, all with an animation
                            which adds a touch of excitement to the experience.
                            <br/>
                            This project not only highlighted my technical skills in React, but also my ability to provide solutions
                            innovative and fun. I'm excited to share more about how this project can add an element of surprise
                            and emotion to various situations and events.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Return</button>
                            <button type="button" className="btn btn-primary" onClick={openOtherPage}>Go to the page</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProyectoRuletaGB
