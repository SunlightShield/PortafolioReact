import '../App.css'
//import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'react-toastify/dist/ReactToastify.css';
//import imagen from "../assets/imgProyectos/CapturaRuleta.jpg"


function ProyectoFacturaGB() {
    const openOtherPage = () => {
        window.open("https://factura-react.vercel.app", '_blank');
    };
    return (
        <>
                <div className="card col-12 col-sm-12 col-md-4 col-lg-12 col-xl-8" id='cardP'>
                    <div className="card-body" style={{ color: "white" }}>
                        <h5 className="card-title">Invoice</h5>
                        <p className="card-text" >A simple invoice created in react</p>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFactura">
                            See more
                        </button>
                    </div>
                </div>

{/* inicio modal */}

            <div className="modal fade" id="exampleModalFactura" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Dynamic Invoice</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        An example of a dynamic invoice created with React, Js and bootstrap, created with an application in mind
                            Crud type, allows you to create, delete and display different text fields which also have their respective
                            validations included.

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

export default ProyectoFacturaGB
