import '../App.css'
//import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'react-toastify/dist/ReactToastify.css';
//import imagen from "../assets/imgProyectos/CapturaRuleta.jpg"
import { useNavigate } from 'react-router-dom';



function ProyectoRuletaES() {

    const navigate = useNavigate();

    return (
        <>
            <div className="card col-12 col-sm-12 col-md-4 col-lg-12 col-xl-8" id='cardP'>
                <div className="card-body" style={{ color: "white" }}>
                    <h5 className="card-title">Ruletka</h5>
                    <p className="card-text" >Prosta ruletka stworzona przy użyciu React</p>
                    <button type="button" className="btn btn-primary" onClick={() => navigate('/ruletaPL')}>
                    Zobacz więcej
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProyectoRuletaES

