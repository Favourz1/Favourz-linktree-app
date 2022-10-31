import React from "react";
import zuriLogo from '../assets/zuri-logo.png'
import ingressiveLogo from '../assets/ingressive-logo.png'

export default function Footer() {
    return(
        <footer>
            <img src={zuriLogo} alt="Zuri Internship Logo" />
            <div>Hng internship 9 Frontend Task.</div>
            <img src={ingressiveLogo} alt="Ingressive for Good Logo" />
        </footer>
    )
}