import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSpring, animated } from '@react-spring/web'
import 'animate.css';

import factura from '../../IMG/factura.jpg'
import PiePagina from '../../Componentes/PiePagina';

function FacturaPL() {
    const [selectedIdioma, setSelectedIdioma] = useState('ES');
    const countries = ["GB", "DE", "ES", "PL",];
    const [springs, api] = useSpring(() => ({
        from: { x: 0 },
        config: { duration: 500 },
        onRest: () => setAnimating(false),
    }));

    const [animating, setAnimating] = useState(true);

    useEffect(() => {
        if (animating) {
            api.start({
                from: {
                    x: -500,
                },
                to: {
                    x: 0,
                },
            });
        }
    }, [animating, api]);

    const openOtherPage = () => {
        window.open("https://factura-react.vercel.app", '_blank');
    };




    return (
        <>
            <div className="hero">
                {/* <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div> */}

                <ToastContainer
                    autoClose={1000} />


                <animated.div id='about-me' style={{ ...springs, }} className="mt-5">
                    <img id='bonfire' src={factura} alt="factura" style={{ width: "900px", height: "auto" }}/>
                    <section className='mt-5 mb-5 border border-white col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                        <div className="card text-center card-body d-flex flex-column align-items-center justify-content-center" style={{ color: 'white', height: '100%' }}>
                        Przykład faktury dynamicznej utworzonej w React, Js i bootstrap, stworzonej z myślą o aplikacji
                            Typ Crud, umożliwia tworzenie, usuwanie i wyświetlanie różnych pól tekstowych, które również mają swoje odpowiednie
                            w tym walidacje.
                        </div>
                    </section>
                </animated.div>

                <animated.div id='about-me' style={{ ...springs, }}>

                    <section className='mt-5 mb-5 border border-white col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                        <div className="card text-center card-body d-flex flex-column align-items-center justify-content-center" style={{ color: 'white', height: '100%' }}>
                        <p>Cały Front został stworzony w React, właściwość SessionStorage JS służy do zapisywania ostatnio wprowadzonych danych</p>
                            <br />
                            <p>W przypadku CSS, który zdecydowaliśmy się użyć Bootstrap, aby widok był responsywny, do pokazania walidacji użyliśmy alertów </p>
                            <br />
                            <button type="button" className="btn btn-primary" onClick={openOtherPage}>Idź do strony</button>
                        </div>
                    </section>
                </animated.div>

                <PiePagina />
            </div>
        </>
    )
}

export default FacturaPL
