import '../App.css'
//import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'react-toastify/dist/ReactToastify.css';
import git from "../assets/git-removebg-preview.png"
import linkedn from "../assets/link-removebg-preview.png"


function PiePagina() {



    return (
        <>
            <footer class="text-white-custom text-center">
                <div class="footer-top bg-secondary-custom">
                    <div class="container">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item mr-4">
                                <a class="link-primary" href="https://www.freecodecamp.org/webmastervito" title="freeCodeCamp" target="_blank" rel="noopener noreferrer">
                                <img id='bonfire' src={git} alt="Bonfire!!..." />
                                </a>
                            </li><li class="list-inline-item mr-4">
                                <a class="link-primary" href="https://codepen.io/webmastervito" title="CodePen" target="_blank" rel="noopener noreferrer">
                                <img id='bonfire' src={linkedn} alt="Bonfire!!..." />
                                </a>
                            </li><li class="list-inline-item">
                                <a class="link-primary" href="https://github.com/webmastervito" title="GitHub" target="_blank" rel="noopener noreferrer">
                                    <i class="fa fa-github fa-2x anim-fourth-seq anim-fourth-seq-js"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom bg-dark-custom">
                    <div class="container">
                        <p  style={{ color: "white" }}>Coded by Sebatian Espinoza 2023</p>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default PiePagina