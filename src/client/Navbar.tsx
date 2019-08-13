import React from 'react';
import { Link } from 'react-router-dom';


export interface NavbarProps {

}

const Navbar: React.SFC<NavbarProps> = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-yellow">
            <a className="navbar-brand">Chirper</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item m-3">
                        <Link to="/" className="btn nav-link">Home</Link>
                    </li>
                    <li className="nav-item m-3">
                        <Link to="/new" className="btn nav-link shadow-sm">New Chirp</Link>
                    </li>
                    <li className="nav-item m-3">
                        <Link to="/mentions" className="btn nav-link shadow-sm">Mentions</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;