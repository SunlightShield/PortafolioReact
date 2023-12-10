//import '../CSS/Home.css'
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSpring, animated } from '@react-spring/web'
import 'animate.css';


import ReactFlagsSelect from "react-flags-select";
import gif from '../assets/bonfire.gif'
import PiePagina from '../Componentes/PiePagina';

import AboutES from "../Componentes/AboutES"
import AboutGB from "../Componentes/AboutGB"
import AboutPL from "../Componentes/AboutPL"
import AboutDE from "../Componentes/AboutDE"

import ProyectoRuletaES from "../Componentes/ProyectoRuletaES"
import ProyectoRuletaPL from "../Componentes/ProyectoRuletaPL"
import ProyectoRuletaGB from "../Componentes/ProyectoRuletaGB"
import ProyectoRuletaDE from "../Componentes/ProyectoRuletaDe"

import ExperienciaDE from '../Componentes/ExperienciaDE';
import ExperienciaES from '../Componentes/ExperienciaES';
import ExperienciaGB from '../Componentes/ExperienciaGB';
import ExperienciaPL from '../Componentes/ExperienciaPL';


function Home() {
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


    return (
        <>
            <div className="hero">
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>

                <ToastContainer
                    autoClose={1000} />

                <div>
                    <section id='language-btn' className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >

                        <ReactFlagsSelect
                            selected={selectedIdioma}
                            onSelect={code => setSelectedIdioma(code)}
                            countries={countries}
                            customLabels={{ GB: "English", DE: "Deutsch", ES: "Español", PL: "Polski" }}
                        />
                    </section>

                    <section id='language' className="card text-center card-body d-flex flex-column align-items-center justify-content-center" >
                        {selectedIdioma == 'ES' && <div>
                            <h1 style={{ color: "white" }}>Hola! Soy Sebastian
                            <br/>
                            Bienvenido a mi portafolio</h1>
                        </div>
                        }

                        {selectedIdioma == 'GB' && 
                        <div>
                        <h1 style={{ color: "white" }}>Hello! Im Sebastian
                        <br/>
                        Welcome to my web page</h1>
                    </div>
                        }

                        {selectedIdioma == 'PL' && <div>
                        <h1 style={{ color: "white" }}>Cześć, jestem Sebastian
                        <br/>
                        Witam na mojej stronie internetowej</h1>
                    </div>
                        }
                        {selectedIdioma == 'DE' && <div>
                        <h1 style={{ color: "white" }}>Hallo, mein Name ist Sebastian
                        <br/>
                        Willkommen auf meiner Website</h1>
                    </div>
                        }
                    </section>
                </div>

                <animated.div id='about-me' style={{ ...springs, }}>
                    <img id='bonfire' src={gif} alt="Bonfire!!..." />
                    <section className='mt-5 mb-5 border border-white col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                        {selectedIdioma == 'ES' && 
                            <AboutES></AboutES>
                        
                        }

                        {selectedIdioma == 'GB' && 
                                <AboutGB></AboutGB>
                           
                        
                        }

                        {selectedIdioma == 'PL' && 
                                <AboutPL></AboutPL>
                        }

                        {selectedIdioma == 'DE' && 
                                <AboutDE></AboutDE>
                        }
                    </section>
                </animated.div>

                <section id='language' className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" >

                    {selectedIdioma == 'ES' && <div>
                        <h3 style={{ color: "white" }}>Mis Proyectos</h3>

                    </div>
                    }

                    {selectedIdioma == 'GB' && <div>
                        <h3 style={{ color: "white" }}>My projects</h3>

                    </div>
                    }

                    {selectedIdioma == 'PL' && <div>
                        <h3 style={{ color: "white" }}>Moje projekty</h3>

                    </div>
                    }
                    {selectedIdioma == 'DE' && <div>
                        <h3 style={{ color: "white" }}>Meine Projekte</h3>

                    </div>
                    }
                </section>

                <div id='about-me-Pro'>
                    <section className='mt-5 mb-5 border border-white col-12 col-sm-10 col-md-10 col-lg-6 col-xl-6'>
                        {selectedIdioma == 'ES' &&
                            <ProyectoRuletaES />
                        }

                        {selectedIdioma == 'PL' && 
                                <ProyectoRuletaPL></ProyectoRuletaPL>
                          
                        }

                        {selectedIdioma == 'GB' && 
                                <ProyectoRuletaGB></ProyectoRuletaGB>
                            
                        }

                        {selectedIdioma == 'DE' && 
                                <ProyectoRuletaDE></ProyectoRuletaDE>
                           
                        }
                    </section>
                </div>

                <section id='language' className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" >
                    {selectedIdioma == 'ES' && <div>
                        <h3 style={{ color: "white" }}>Mis Experiencias Laborales</h3>
                    </div>
                    }

                    {selectedIdioma == 'GB' && <div>
                        <h3 style={{ color: "white" }}>My Working Experiences </h3>
                    </div>
                    }

                    {selectedIdioma == 'PL' && <div>
                        <h3 style={{ color: "white" }}>Moje doświadczenia zawodowe</h3>
                    </div>
                    }
                    {selectedIdioma == 'DE' && <div>
                        <h3 style={{ color: "white" }}>Meine Berufserfahrungen</h3>
                    </div>
                    }
                </section>

                <div id='about-me-Exp'>
                    <section className='mt-5 mb-5 border border-white col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                        {selectedIdioma == 'ES' &&
                            <ExperienciaES />
                        }

                        {selectedIdioma == 'PL' && 
                                <ExperienciaPL />
                        }

                        {selectedIdioma == 'GB' && 
                                <ExperienciaGB />
                           
                        }

                        {selectedIdioma == 'DE' && 
                                <ExperienciaDE />
                            
                        }
                    </section>
                </div>

                <PiePagina />
            </div>
        </>
    )
}

export default Home
