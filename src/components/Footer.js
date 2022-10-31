import React from "react";
import zuriLogo from '../assets/zuri-logo.png'
import ingressiveLogo from '../assets/ingressive-logo.png'

export default function Footer() {
    return(
        <footer className="justify-content-center justify-content-sm-between">
            <img className="col-12 col-sm" src={zuriLogo} alt="Zuri Internship Logo" />
            <div className="col-12 col-sm footer-text">Hng internship 9 Frontend Task.</div>
            <img className="col-12 col-sm" src={ingressiveLogo} alt="Ingressive for Good Logo" />
        </footer>
    )
}