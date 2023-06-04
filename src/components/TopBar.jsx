    import React,{ useState } from 'react'
    import './topbar.css'
    import { List, X } from 'phosphor-react';

    export default function Topbar() {
        const [isNavExpanded, setIsNavExpanded] = useState(false)
        return (
        <nav className="navigation">
            <a href="/" className="brand-name">
            Pachhyan Hackathon 
            </a>
            <div>
            <button className="hamburger"  onClick={() => {
            setIsNavExpanded(!isNavExpanded)
            }}>
            {!isNavExpanded?<List size={32}/>:<X size={32}/>}
            </button>
            <div
            className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
        >
            <ul>
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#judges">Judges</a>
            </li>
            <li>
                <a href="#prizes">Prize Pool</a>
            </li>
            {/* <li>
                <a href="#"></a>
            </li> */}
            <li>
                <a href="#our-sponsors">Sponsors</a>
            </li>
            <li>
                <a href="#faqs">FAQ's</a>
            </li>
            </ul>
        </div>
            </div>
        </nav>
        );
    }