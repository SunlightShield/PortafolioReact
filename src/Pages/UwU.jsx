import { useState } from 'react'
import viteLogo from '/vite.svg'
import '../App.css'
//import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import OwO from '../assets/OwO.mp3'
import UWU from '../assets/UWU.mp3'

function Home() {

    const [uwu, setUwu] = useState(false)
    const [owo, setOwo] = useState(true)

    function mostrarOwO(){
        console.log('hellyeah')
        setUwu(true)
        setOwo(false)
        toast.success('Hewwo!!!')
        new Audio(UWU).play()

    } 

    function mostrarUwU(){
        console.log('fuckyeah')
        setOwo(true)
        setUwu(false)
        toast.error('Bye!!!')
        new Audio(OwO).play()
    } 



  return (
    <>
    <ToastContainer 
        autoClose={1000}/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
    
      </div>
      <h1>Vite + React</h1>
      <div className="card">

      { owo === true && (
        <button type="button" className="btn btn-success" onClick={mostrarOwO}>UwU</button>)}


        { uwu === true && (
            <button type="button" className="btn btn-success" onClick={mostrarUwU}>0w0</button>)}

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Home
