import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSpring, animated } from '@react-spring/web'
import 'animate.css';

import CapturaRuleta from '../../IMG/CapturaRuleta.jpg'
import PiePagina from '../../Componentes/PiePagina';

function RuletaES() {
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
        console.log("prueba")
        window.open("https://ruleta-al-azar.vercel.app", '_blank');
    }




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
                    <img id='bonfire' src={CapturaRuleta} alt="Bonfire!!..." />
                    <section className='mt-5 mb-5 border border-white col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                        <div className="card text-center card-body d-flex flex-column align-items-center justify-content-center" style={{ color: 'white', height: '100%' }}>
                            Participé activamente en el desarrollo de una emocionante Ruleta de la Fortuna creada en React.
                            Esta aplicación va más allá de la diversión, ya que permite cargar una base de datos desde un archivo Excel y elige a un
                            afortunado ganador mediante una animación cautivadora de la ruleta.
                            <br />
                            En este proyecto, asumí el liderazgo en el Back End, diseñando y ejecutando el procedimiento esencial.
                            Mi contribución incluyó la creación de la función para cargar la data desde Excel, exhibirla de manera visualmente
                            atractiva en pantalla y seleccionar al ganador de forma aleatoria, todo ello con una animación
                            que agrega un toque de emoción a la experiencia.
                            <br />
                            Este proyecto no solo destacó mis habilidades técnicas en React, sino también mi capacidad para aportar soluciones
                            innovadoras y divertidas. Estoy emocionado de compartir más sobre cómo este proyecto puede agregar un elemento de sorpresa
                            y emoción a diversas situaciones y eventos.
                        </div>
                    </section>
                </animated.div>

                <animated.div id='about-me' style={{ ...springs, }}>

                    <section className='mt-5 mb-5 border border-white col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                        <div className="card text-center card-body d-flex flex-column align-items-center justify-content-center" style={{ color: 'white', height: '100%' }}>
                            <p>Todo el Front fue creado con React, la función para elegir el ganador del juego fue creada usando JavaScript</p>
                            <br />
                            <p>Para el CSS se opto por usar Bootstrap, para mantener la vista responsiva. el proyecto usa librerias para la lectura del excel </p>
                            <br />
                            <button type="button" className="btn btn-primary" onClick={openOtherPage}>Ir a la pagina</button>
                        </div>
                    </section>
                </animated.div>

                <PiePagina />
            </div>
        </>
    )
}

export default RuletaES
