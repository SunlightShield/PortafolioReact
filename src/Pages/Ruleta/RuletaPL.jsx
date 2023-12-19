import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSpring, animated } from '@react-spring/web'
import 'animate.css';

import CapturaRuleta from '../../IMG/CapturaRuleta.jpg'
import PiePagina from '../../Componentes/PiePagina';

function RuletaPL() {
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
                <ToastContainer
                    autoClose={1000} />


                <animated.div id='about-me' style={{ ...springs, }} className="mt-5">
                    <img id='bonfire' src={CapturaRuleta} alt="Bonfire!!..." />
                    <section className='mt-5 mb-5 border border-white col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                        <div className="card text-center card-body d-flex flex-column align-items-center justify-content-center" style={{ color: 'white', height: '100%' }}>
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
                    </section>
                </animated.div>

                <animated.div id='about-me' style={{ ...springs, }}>

                    <section className='mt-5 mb-5 border border-white col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                        <div className="card text-center card-body d-flex flex-column align-items-center justify-content-center" style={{ color: 'white', height: '100%' }}>
                            <p>Cały front został stworzony w React, funkcja wyłonienia zwycięzcy została wykonana w JavaScript</p>
                            <br />
                            <p>W przypadku CSS użyliśmy Bootstrap, funkcją odczytującą Excel jest biblioteka zewnętrzna  </p>
                            <br />
                            <button type="button" className="btn btn-primary" onClick={openOtherPage}>Przejdź do strony</button>
                        </div>
                    </section>
                </animated.div>

                <PiePagina />
            </div>
        </>
    )
}

export default RuletaPL
