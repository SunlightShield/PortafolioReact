//import '../CSS/Home.css'
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactFlagsSelect from "react-flags-select";
import gif from '../assets/bonfire.gif'
import AboutES from "../Componentes/AboutES"
import AboutGB from "../Componentes/AboutGB"
import AboutPL from "../Componentes/AboutPL"
import AboutDE from "../Componentes/AboutDE"

function Home() {
    const [selectedIdioma, setSelectedIdioma] = useState('');
    const countries = ["GB", "DE", "ES", "PL",];
    return (
        <>

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

                <section id='language' className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" >
                    {selectedIdioma == 'ES' && <div>
                        <h1 style={{ color: "white" }}>Hola! Soy Sebastian</h1>
                        <h1 style={{ color: "white" }}>Bienvenido a mi portafolio</h1>
                    </div>
                    }

                    {selectedIdioma == 'GB' && <div>
                        <h1 style={{ color: "white" }}>Hello! Im Sebastian</h1>
                        <h1 style={{ color: "white" }}>Welcome to my web page</h1>
                    </div>
                    }

                    {selectedIdioma == 'PL' && <div>
                        <h1 style={{ color: "white" }}>Cześć, jestem Sebastian</h1>
                        <h1 style={{ color: "white" }}>Witam na mojej stronie internetowej</h1>
                    </div>
                    }
                    {selectedIdioma == 'DE' && <div>
                        <h1 style={{ color: "white" }}>Hallo, mein Name ist Sebastian</h1>
                        <h1 style={{ color: "white" }}>Willkommen auf meiner Website</h1>
                    </div>
                    }
                </section>

            </div>

            <div id='about-me'>

                <img id='bonfire' src={gif} alt="Bonfire!!..." />
                <section className='mt-5 border border-white col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                    {selectedIdioma == 'ES' && <div className="card">
                        <AboutES></AboutES>
                    </div>
                    }

                    {selectedIdioma == 'GB' && <div className="card">
                        <div className="card-body" style={{ color: "white" }}>
                        <AboutGB></AboutGB>
                        </div>
                    </div>
                    }

                    {selectedIdioma == 'PL' && <div className="card">
                        <div className="card-body" style={{ color: "white" }}>
                        <AboutPL></AboutPL>
                        </div>
                    </div>
                    }

                    {selectedIdioma == 'DE' && <div className="card">
                        <div className="card-body" style={{ color: "white" }}>
                        <AboutDE></AboutDE>
                        </div>
                    </div>
                    }
                </section>
            </div>
        </>
    )
}

export default Home
