import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSpring, animated } from '@react-spring/web'
import 'animate.css';

import CapturaRuleta from '../../IMG/CapturaRuleta.jpg'
import PiePagina from '../../Componentes/PiePagina';

function RuletaGB() {
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
                            I actively participated in the development of an exciting Wheel of Fortune created in React.
                            This application goes beyond fun, as it allows you to load a database from an Excel file and choose a
                            lucky winner through captivating roulette animation.
                            <br />
                            In this project, I assumed leadership in the Back End, designing and executing the essential procedure.
                            My contribution included creating the function to load the data from Excel, display it visually
                            attractive on the screen and select the winner at random, all with an animation
                            which adds a touch of excitement to the experience.
                            <br />
                            This project not only highlighted my technical skills in React, but also my ability to provide solutions
                            innovative and fun. I'm excited to share more about how this project can add an element of surprise
                            and emotion to various situations and events.
                        </div>
                    </section>
                </animated.div>

                <animated.div id='about-me' style={{ ...springs, }}>

                    <section className='mt-5 mb-5 border border-white col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                        <div className="card text-center card-body d-flex flex-column align-items-center justify-content-center" style={{ color: 'white', height: '100%' }}>
                            <p>All the front was created with React, the function to chosse the winner was made with JavaScript</p>
                            <br />
                            <p>For the CSS we used Bootstrap, the function that reads the excel is an external library  </p>
                            <br />
                            <button type="button" className="btn btn-primary" onClick={openOtherPage}>Go to the page</button>
                        </div>
                    </section>
                </animated.div>

                <PiePagina />
            </div>
        </>
    )
}

export default RuletaGB
