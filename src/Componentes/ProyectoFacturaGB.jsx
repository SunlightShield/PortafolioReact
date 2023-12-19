import '../App.css'
//import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'react-toastify/dist/ReactToastify.css';
//import imagen from "../assets/imgProyectos/CapturaRuleta.jpg"
import { useNavigate } from 'react-router-dom';


function ProyectoFacturaGB() {
    const navigate = useNavigate();

    return (
        <>
            <div className="card col-12 col-sm-12 col-md-4 col-lg-12 col-xl-8" id='cardP'>
                <div className="card-body" style={{ color: "white" }}>
                    <h5 className="card-title">Invoice</h5>
                    <p className="card-text" >A simple invoice created in react</p>
                    <button type="button" className="btn btn-primary" onClick={() => navigate('/facturaGB')}>
                        See More
                    </button>
                </div>
            </div>

            {/* inicio modal */}
        </>
    )
}

export default ProyectoFacturaGB
